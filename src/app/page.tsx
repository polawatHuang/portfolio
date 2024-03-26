import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import {
  ChevronRightIcon,
  RectangleStackIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/Button'
// import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoVpark from '@/images/logos/v-park-logo.webp'
import logoSCSpark from '@/images/logos/sc-spark-logo.webp'
import logoSEAC from '@/images/logos/seac-logo.webp'
import logoIdeaSpace from '@/images/logos/idea-space-logo.webp'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import imageSeacWeb from '@/images/photos/seac-web.webp'
import imageArbinger from '@/images/photos/arbinger-web.webp'
import imageBlanchard from '@/images/photos/blanchard-web.webp'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
// import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
// import { formatDate } from '@/lib/formatDate'

const assetPrefix = '/portfolio'

const articles = [
  {
    title: 'Arbinger Business Website',
    date: '1 Mar 2024',
    image: imageArbinger,
    slug: 'https://arbingerthailand.seasiacenter.com/',
    description:
      'The Arbinger Institute is a global training and consulting firm that helps individuals, teams, and organizations achieve breakthrough results by shifting from the default self-focus we call an inward mindset to the others-inclusive focus of an outward mindset. Fontend for this website is using Next.js with Tailwind CSS. Backend using Strapi CMS.',
  },
  {
    title: 'Blanchard Business Website',
    date: '1 Jan 2024',
    image: imageBlanchard,
    slug: 'https://blanchard.seasiacenter.com/',
    description:
      'Blanchard is the leadership and management training provider innovative companies trust to develop their people. Learn more about our consulting programs. Fontend for this website is using Next.js with Tailwind CSS. Backend using Strapi CMS.',
  },
  {
    title: 'SEAC Business Website',
    date: '1 Jan 2023',
    image: imageSeacWeb,
    slug: 'https://www.seasiacenter.com/',
    description:
      'SEAC website is online learning course platform for Executive Level People Leaders. Fontend for this website is using Next.js with Tailwind CSS. Backend using Strapi CMS.',
  },
]

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// function Article({ article }: { article: ArticleWithSlug }) {
//   return (
//     <Card as="article">
//       <Image
//         src={image1}
//         className="z-20 mb-4 rounded-xl"
//         height={512}
//         width={512}
//         alt={article ? article.title : 'Title'}
//         loading="lazy"
//       />
//       <Card.Title href={`/articles/${article ? article.slug : ''}`}>
//         {article ? article.title : 'Title'}
//       </Card.Title>
//       <Card.Eyebrow
//         as="time"
//         dateTime={article ? article.date : '2024-03-26'}
//         decorate
//       >
//         {formatDate(article ? article.date : '2024-03-26')}
//       </Card.Eyebrow>
//       <Card.Description>
//         {article ? article.description : 'test some description'}
//       </Card.Description>
//       <Card.Cta>Read article</Card.Cta>
//     </Card>
//   )
// }

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'SEAC',
      title: 'Software Engineer',
      logo: logoSEAC,
      start: '1 Jan 2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'V-Park Plaza',
      title: 'Software Engineer',
      logo: logoVpark,
      start: '1 Jan 2022',
      end: '31 Dec 2023',
    },
    {
      company: 'SC Spark Solutions',
      title: 'Software Engineer',
      logo: logoSCSpark,
      start: '6 Dec 2021',
      end: '31 Dec 2021',
    },
    {
      company: 'IDEA SPACE',
      title: 'Junior Engineer',
      logo: logoIdeaSpace,
      start: '1 Jan 2019',
      end: '31 Dec 2020',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="https://drive.google.com/file/d/1HFYif00-gjDMqM4_dWBN9xNo84ZnIIzJ/view?usp=sharing"
        target="_blank"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <FadeInStagger faster>
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
            <FadeIn key={image.src}>
              <div
                className={clsx(
                  'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                  rotations[imageIndex % rotations.length],
                )}
              >
                <Image
                  src={image}
                  alt=""
                  sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </div>
  )
}

export default async function Home() {
  // let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Polawat Huang
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hi! I’m Joe, a software engineer with hands-on experience in all
            levels of testing, including performance, functional, integration,
            system, and user acceptance.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="">
            <div className="mb-lg flex justify-between">
              <div className="flex items-center gap-2">
                <RectangleStackIcon className="h-12 w-12 flex-none" />
                <h2 className="leading-7xl mb-1 text-4xl font-bold">
                  Projects
                </h2>
              </div>
              <Link href="/projects" className="flex items-center gap-1">
                View all projects <ChevronRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <FadeInStagger faster>
              <div className="mt-[3vw] flex flex-col gap-[60px]">
                {articles.map((item) => {
                  return (
                    <FadeIn key={item.title}>
                      <article className="group relative flex flex-col items-start">
                        <Image
                          src={item.image}
                          alt={'test'}
                          height={512}
                          width={512}
                          className="z-20 mb-4 h-auto w-full rounded-xl shadow-lg"
                          loading="lazy"
                        />
                        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
                          <Link href={item.slug} target="_blank">
                            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">{item.title}</span>
                          </Link>
                        </h2>
                        <time
                          className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500"
                          dateTime="2022-09-05"
                        >
                          <span
                            className="absolute inset-y-0 left-0 flex items-center"
                            aria-hidden="true"
                          >
                            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                          </span>
                          {item.date}
                        </time>
                        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {item.description}
                        </p>
                        <div
                          aria-hidden="true"
                          className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                        >
                          View website
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                            className="ml-1 h-4 w-4 stroke-current"
                          >
                            <path
                              d="M6.75 5.75 9.25 8l-2.5 2.25"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </article>
                    </FadeIn>
                  )
                })}
              </div>
            </FadeInStagger>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
