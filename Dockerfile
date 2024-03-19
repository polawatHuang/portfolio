FROM node:18-alpine AS base

FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY src/client/package.json src/client/yarn.lock ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Sentry issue error spawn Unknown system error -8 : https://github.com/getsentry/sentry-cli/issues/1317
# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY src/client .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

FROM base AS runner
WORKDIR /app

ENV DD_SERVICE <SERVICE>
ENV DD_VERSION <VERSION>

LABEL com.datadoghq.tags.service="preprod-seasia-web"
LABEL com.datadoghq.tags.version="1.0.0"

ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

ENV DD_ENV="prod-seasia-web"
ENV DD_SERVICE="prod-seasia-web"
ENV DD_VERSION="1.0.0"

LABEL com.datadoghq.tags.service="prod-seasia-web"
LABEL com.datadoghq.tags.version="1.0.0"

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next-env.d.ts ./next-env.d.ts
COPY --from=builder /app/next-i18next.config.js ./next-i18next.config.js
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/server.js ./server.js
# Sentry dependency 
COPY --from=builder /app/sentry.server.config.ts /app/sentry.edge.config.ts /app/sentry.properties ./
COPY --from=deps /app/node_modules ./node_modules

USER nextjs
ENV PORT 3000

CMD [ "yarn", "start" ]