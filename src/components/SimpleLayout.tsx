import { Container } from '@/components/Container'
import { FadeIn } from './FadeIn'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <FadeIn>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {intro}
          </p>
        </FadeIn>
      </header>
      <FadeIn>
        {children && <div className="mt-16 sm:mt-20">{children}</div>}
      </FadeIn>
    </Container>
  )
}
