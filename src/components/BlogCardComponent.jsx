'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

// interface BlogCardComponentProps {
//   image: any
//   date: string
//   title: string
//   href: string
//   description: string
// }

export function BlogCardComponent({
  image,
  logo,
  date,
  title,
  href,
  description,
}) {
  return (
    <div className="relative h-[500px] w-full rounded-[30px] border-[1px] border-gray-300 shadow-lg">
      <div id="card-header" className="relative">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={250}
            height={400}
            className="z-[-1] h-[200px] w-full rounded-t-[30px] object-cover"
          />
        ) : null}
      </div>
      <div id="card-body" className="p-6">
        <span className="text-gray-400">{date ? date : ''}</span>
        <h3 className="mt-2 line-clamp-2 text-[24px] font-bold leading-[28px]">
          {title ? title : ''}
        </h3>
        <p className="line-clamp-3">{description ? description : ''}</p>
      </div>
      <div
        id="card-footer"
        className="absolute bottom-0 left-0 w-full rounded-b-[30px] border-t-[1px] bg-gray-50 p-6"
      >
        <Link
          href={href}
          className="flex justify-between font-semibold text-[#14B8A6]"
        >
          <span>{'en' === 'th' ? 'อ่านเพิ่มเติม' : 'Read Article'}</span>
          <ChevronRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
