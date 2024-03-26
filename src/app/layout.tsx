import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import imageOG from '@/images/photos/image-2.jpg'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Polawat Huang',
    default:
      'Polawat Huang - Software engineer, UX/UI deginer, and cyber security specialist',
  },
  description:
    'Hi! I’m Joe, a software engineer with hands-on experience in all levels of testing, including performance, functional, integration, system, and user acceptance.',
  openGraph: {
    title:
      'Polawat Huang - Software engineer, UX/UI deginer, and cyber security specialist',
    description:
      'Hi! I’m Joe, a software engineer with hands-on experience in all levels of testing, including performance, functional, integration, system, and user acceptance.',
    images: [imageOG.src],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
