import React, { useEffect, useState } from 'react'
import { TextWithBgComponent } from '@/components/TextWithBgComponent'
import { useRouter } from 'next/router'
import { blogs } from '@/libs/blogs.js'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import SocialShare from '@/components/SocialShare/SocialShare'

const MOCK_CASE_STUDIES = blogs

export default function Page() {
  const router = useRouter()
  const { slug } = router.query
  const [title, setTitle] = useState('')
  const [image, setImage] = useState(null)
  const [content, setContent] = useState('')
  const [desc, setDesc] = useState('')
  const [url, setUrl] = useState('')

  useEffect(() => {
    MOCK_CASE_STUDIES.filter((item) => item.slug === slug).map((item) => {
      setTitle(item.title)
      setImage(item.image)
      setDesc(item.desc)
      setContent(item.content)
    })
    setUrl('https://arbingerthailand.seasiacenter.com/blog/' + slug)
  }, [slug])

  return (
    <>
      <TextWithBgComponent title={title} backgroundImage={image} />
      <Container className={'py-[60px]'}>
        <section
          id="case-study-detail"
          className="relative grid min-h-screen w-full"
        >
          <FadeIn>
            <div className="mb-[16px] flex items-center gap-4">
              {'en' === 'th' ? 'แชร์ไปที่' : 'Share on'}
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
      </Container>
    </>
  )
}
