import { type Metadata } from 'next'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import imageSeac from '@/images/photos/seac-web.webp'
import imageArbinger from '@/images/photos/arbinger-web.webp'
import imageBlanchard from '@/images/photos/blanchard-web.webp'
import imageYourNextU from '@/images/photos/yournextu.webp'
import imageFoodDee from '@/images/photos/foodee.webp'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Layout from '@/pages/layout'

const projects = [
  {
    name: 'SEAC Website',
    description:
      'SEAC aims to promote lifelong learning through experiences that encourage learning and real-world application. This website is built with Next.js with Tailwind CSS, while the backend is powered by Strapi CMS.',
    link: { href: 'https://seasiacenter.com/', label: 'www.seasiacenter.com' },
    logo: imageSeac,
  },
  {
    name: 'Arbinger Website',
    description:
      'The Arbinger Institute changes companies by cultivating leaders, groups, and cultures via a mentality change that produces remarkable outcomes. This website is built with Next.js with Tailwind CSS, while the backend is powered by Strapi CMS.',
    link: {
      href: 'https://arbingerthailand.seasiacenter.com/',
      label: 'arbingerthailand.seasiacenter.com',
    },
    logo: imageArbinger,
  },
  {
    name: 'Blanchard Website',
    description:
      'Cutting-edge businesses rely on Blanchard as their go-to source for management and leadership development programs. Find out more about our programs for consulting. This website is built with Next.js with Tailwind CSS, while the backend is powered by Strapi CMS.',
    link: {
      href: 'https://blanchard.seasiacenter.com/',
      label: 'blanchard.seasiacenter.com',
    },
    logo: imageBlanchard,
  },
  {
    name: 'YourNextU Website',
    description:
      'A learning portal called YourNextU caters to the demands of the younger generation. Obtain a credential from a reputable organization. This website is built with WordPress.',
    link: { href: 'https://www.yournextu.com/', label: 'www.yournextu.com' },
    logo: imageYourNextU,
  },
  {
    name: 'FoodDee Website',
    description:
      'FoodDee Website is an online franchise business website that offers taxi franchise recruitment services and hotel reservation system.  This website is built with WordPress.',
    link: { href: 'https://fooddee.co/', label: 'fooddee.co' },
    logo: imageFoodDee,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "I've worked on a lot of projects over the years, but these are the ones I'm most pleased of. Many of them are open-source, so if you notice anything that interests you, go into the code and contribute if you have suggestions for how to enhance it.",
}

export default function Projects() {
  return (
    <Layout>
        <SimpleLayout
        title="My Projects"
        intro="I've worked on a lot of projects over the years, but these are the ones I'm most pleased of. Many of them are open-source, so if you notice anything that interests you, go into the code and contribute if you have suggestions for how to enhance it."
        >
        <FadeInStagger faster>
            <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
            {projects.map((project) => (
                <FadeIn key={project.name}>
                <Card as="li">
                    <div className="z-20 w-full">
                    <Image
                        src={project.logo}
                        alt={project.name}
                        width={350}
                        height={350}
                        className="h-auto w-full rounded-lg shadow-lg"
                        loading="lazy"
                    />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={project.link.href}>{project.name}</Card.Link>
                    </h2>
                    <Card.Description>{project.description}</Card.Description>
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{project.link.label}</span>
                    </p>
                </Card>
                </FadeIn>
            ))}
            </ul>
        </FadeInStagger>
        </SimpleLayout>
    </Layout>
  )
}