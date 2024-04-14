import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import Layout from '@/pages/layout'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'Hi! I’m Joe, a software engineer with hands-on experience in all levels of testing, including performance, functional, integration, system, and user acceptance.',
}

export default function About() {
  return (
    <Layout>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Polawat Huang"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              About Me
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hello! I&apos;m Polawat Huang (Joe), a passionate software
                engineer dedicated to building innovative solutions and pushing
                the boundaries of technology. With 6 years of experience in the
                field, I specialize in Website development and mobile application
                development.
              </p>
              <p>
                My primary goal is to continually enhance my skills and knowledge
                in software engineering. This includes staying updated with the
                latest technologies, methodologies, and best practices in the
                field. I aim to pursue certifications, attend workshops, and
                engage in self-directed learning to broaden my expertise.
              </p>
              <p>
                I have always been fascinated by the power of technology to
                transform the world around us, and software engineering has been
                my avenue to explore and contribute to this transformative force.
                From a young age, I found joy in unraveling the mysteries of code,
                discovering how lines of logic could create intricate systems and
                bring ideas to life.
              </p>
              <p>
                My passion for software engineering goes beyond mere technical
                curiosity; it is a deeply ingrained drive to innovate,
                problem-solve, and create solutions that make a meaningful impact.
                Whether it&apos;s developing efficient algorithms, designing
                intuitive user interfaces, or optimizing performance, I approach
                each project with enthusiasm and a relentless pursuit of
                excellence.
              </p>
              <p>
                My commitment to excellence is reflected in every aspect of my
                work. I believe in setting high standards for myself and
                continuously pushing the boundaries of what&apos;s possible. I
                strive for elegant, efficient solutions that not only meet the
                requirements but exceed expectations in terms of performance,
                reliability, and user experience.
              </p>
              <p>
                I am constantly seeking opportunities to learn and grow, immersing
                myself in new technologies, methodologies, and best practices. I
                embrace challenges as opportunities for growth, tackling complex
                problems with creativity, tenacity, and a collaborative spirit. I
                am driven by a genuine desire to make a positive difference
                through my work, whether it&apos;s streamlining processes,
                improving efficiency, or enhancing user satisfaction.
              </p>
              <p>
                Moreover, my commitment to excellence extends beyond technical
                proficiency to encompass integrity, professionalism, and ethical
                responsibility. I believe in transparency, open communication, and
                a collaborative approach to problem-solving. I strive to foster a
                culture of respect, trust, and continuous improvement in every
                team and project I am involved in.
              </p>
              <p>
                In summary, my passion for software engineering fuels my
                relentless pursuit of excellence in every aspect of my work. I am
                dedicated to pushing the boundaries of innovation, delivering
                impactful solutions, and making a positive difference in the world
                through technology.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/polawathuang" icon={XIcon}>
                Follow on X
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/joe_diary1996"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/polawatHuang/portfolio"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/polawat-huang-b9484a200"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:polawathuang@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                polawathuang@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
