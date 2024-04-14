'use client'
// import { type Metadata } from 'next'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'

// export const metadata: Metadata = {
//   title: {
//     template: '%s - Polawat Huang',
//     default: 'Polawat Huang - Software engineer, and UX/UI deginer.',
//   },
//   description:
//     'Hi! I’m Joe, a software engineer with hands-on experience in all levels of testing, including performance, functional, integration, system, and user acceptance.',
//   openGraph: {
//     title: 'Polawat Huang - Software engineer, and UX/UI deginer.',
//     description:
//       'Hi! I’m Joe, a software engineer with hands-on experience in all levels of testing, including performance, functional, integration, system, and user acceptance.',
//     images:
//       'https://polawathuang.vercel.app/_next/static/media/image-2.5a95549c.jpg',
//   },
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <div className="flex w-full">
        <Layout>{children}</Layout>
      </div>
    </Providers>
  )
}
