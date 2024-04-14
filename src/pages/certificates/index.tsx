import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoCertificate1 from '@/images/certificates/foundations-of-project-management.webp'
import logoCertificate2 from '@/images/certificates/python-project-for-ai.webp'
import logoCertificate3 from '@/images/certificates/microservice.webp'
import logoCertificate4 from '@/images/certificates/foundations-of-cyber-security.webp'
import logoCertificate5 from '@/images/certificates/manage-security-risk.webp'
import logoCertificate6 from '@/images/certificates/foundations-of-user-experience.webp'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import Layout from '@/pages/layout'

const projects = [
  {
    name: 'Foundations of Project Management',
    description:
      'An online none-credit cource authorized by Google and offered through Coursera.',
    link: {
      href: 'http://coursera.org/verify/Q2KDEW9M5PA9',
      label: 'Certified by Google',
    },
    logo: logoCertificate1,
  },
  {
    name: 'Python Project for AI & Application Development',
    description:
      'An online none-credit cource authorized by IBM and offered through Coursera.',
    link: {
      href: 'http://coursera.org/verify/TRHG9ARX59WE',
      label: 'Certified by IBM',
    },
    logo: logoCertificate2,
  },
  {
    name: 'Application Development using Microservices and Serverless',
    description:
      'An online none-credit cource authorized by IBM and offered through Coursera.',
    link: {
      href: 'http://coursera.org/verify/PNWXNV7BWKGB',
      label: 'Certified by IBM',
    },
    logo: logoCertificate3,
  },
  {
    name: 'Foundations of Cybersecurity',
    description:
      'An online none-credit cource authorized by Google and offered through Coursera.',
    link: {
      href: 'http://coursera.org/verify/BGCPEZCYVADX',
      label: 'Certified by Google',
    },
    logo: logoCertificate4,
  },
  {
    name: 'Play It Safe: Manage Security Risks',
    description:
      'An online none-credit cource authorized by Google and offered through Coursera.',
    link: {
      href: 'http://coursera.org/verify/J8CZP4NXTTQ8',
      label: 'Certified by Google',
    },
    logo: logoCertificate5,
  },
  {
    name: 'Foundations of User Experience (UX) Design',
    description:
      'An online none-credit cource authorized by Google and offered through Coursera.',
    link: {
      href: 'http://coursera.org/verify/N4DYV456YCTA',
      label: 'Certified by Google',
    },
    logo: logoCertificate6,
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
  title: 'Certificates',
  description:
    'My responsibilities also included building microservices in NodeJS using ExpressJS. Along with that I also worked on developing backend components using Oracle, Mysql and MongoDB. In addition, I was working with Rest API integration which involved writing both the database and UI/UX interactions. On top of that I worked on Spring framework along with Postman.',
}

export default function Certificates() {
  return (
    <Layout>
        <SimpleLayout
        title="My Certificates"
        intro="My responsibilities also included building microservices in NodeJS using ExpressJS. Along with that I also worked on developing backend components using Oracle, Mysql and MongoDB. In addition, I was working with Rest API integration which involved writing both the database and UI/UX interactions. On top of that I worked on Spring framework along with Postman."
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