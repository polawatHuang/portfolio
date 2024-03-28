'use client'
import React, { useEffect, useState } from 'react'
import { TextWithBgComponent } from '@/components/TextWithBgComponent'
import { blogs } from '@/lib/blogs'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import SocialShare from '@/components/SocialShare/SocialShare'
import Image, { StaticImageData } from "next/image"
import { SimpleLayout } from '@/components/SimpleLayout'

const MOCK_CASE_STUDIES = blogs

export default function Page() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState<StaticImageData>()
  const [content, setContent] = useState('')
  const [desc, setDesc] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    MOCK_CASE_STUDIES.filter((item) => item.slug === 'what-is-ai').map((item) => {
      setTitle(item.title)
      setImage(item.image)
      setDesc(item.desc)
      setContent(item.content)
    })
    setUrl('https://polawathuang.vercel.app/articles/')
  }, [])

  return (
    <>
      <SimpleLayout title={title} intro={''}>
        <section
          className="relative grid min-h-screen w-full"
        >
          {/* <TextWithBgComponent title={title} backgroundImage={image} /> */}
          <Image src={image || ''} alt={title} className="w-full h-auto mb-[64px]" width={300} height={200} />
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
