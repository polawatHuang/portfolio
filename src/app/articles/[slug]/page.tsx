'use client'
import React, { useEffect, useState } from 'react'
import { blogs } from '@/lib/blogs'
import { FadeIn } from '@/components/FadeIn'
import SocialShare from '@/components/SocialShare/SocialShare'
import Image, { StaticImageData } from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'
import Head from 'next/head'

const MOCK_CASE_STUDIES = blogs

export default function Page() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState<StaticImageData>()
  const [content, setContent] = useState('')
  const [desc, setDesc] = useState('')
  const [url, setUrl] = useState('')
  const currentPage =
    typeof window !== 'undefined' ? window.location.pathname : ''
  // Extract the slug from the pathname
  const slug = currentPage.split('/').pop() || 'default-slug'

  useEffect(() => {
    MOCK_CASE_STUDIES.filter((item) => item.slug === slug).map((item) => {
      setTitle(item.title)
      setImage(item.image)
      setDesc(item.desc)
      setContent(item.content)
    })
    setUrl('https://polawathuang.vercel.app/articles/')
  }, [])

  return (
    <>
      <Head>
        <title>{title + ' - by Polawat Huang'}</title>
        <meta name="description" content={`${desc}`} />
        <meta property="og:image" content={image?.src || 'https://polawathuang.vercel.app/_next/static/media/image-2.5a95549c.jpg'} />
        {/* Add other meta tags or link tags here */}
      </Head>
      <SimpleLayout title={title} intro={''}>
        <section className="relative grid min-h-screen w-full">
          {/* <TextWithBgComponent title={title} backgroundImage={image} /> */}
          <Image
            src={image || ''}
            alt={title}
            className="mb-[64px] h-auto w-full"
            width={300}
            height={200}
          />
          <FadeIn>
            <div className="mb-[16px] flex items-center gap-4">
              {false ? 'แชร์ไปที่' : 'Share on'}
              <SocialShare
                facebook={url}
                twitter={url}
                linkedin={url}
                pinterest={url}
                email={url}
              />
            </div>
            <div
              className="w-full"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </FadeIn>
        </section>
      </SimpleLayout>
    </>
  )
}
