'use client'
import React, { useState } from 'react'
import { TextWithBgComponent } from '@/components/TextWithBgComponent'
import { SearchAndFilterComponent } from '@/components/SearchAndFilterComponent'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { blogs } from '@/lib/blogs'
import { BlogCardComponent } from '@/components/BlogCardComponent'
import ImageBg from '@/images/polawat-profile-picture.jpg'
import { SimpleLayout } from '@/components/SimpleLayout'

const filterTitles = (dataArray: any, keyword: any) => {
  return dataArray.filter((item: any) =>
    item.title.toLowerCase().includes(keyword.toLowerCase()),
  )
}

export default function Articles() {
  const [searchKeyword, setSearchKeyword] = useState('none')

  return (
    <>
      <SimpleLayout title="Articles" intro="">
        <section
          id="section-blogs"
          className="px-[1.25em] py-[60px] lg:mx-auto lg:max-w-[90.625rem]"
        >
          <SearchAndFilterComponent
            setSearchKeyword={setSearchKeyword}
            total={blogs.length}
          />
          <div className="my-[50px] px-[1.8em] lg:mx-auto lg:max-w-[90.625rem]">
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
              {blogs
                ? filterTitles(blogs, searchKeyword).map((item: any) => {
                    return (
                      <div key={item.title}>
                        <BlogCardComponent
                          image={item.image}
                          logo={'/'}
                          date={item.date}
                          href={'/blog/' + item.slug}
                          title={item.title}
                          description={item.desc}
                        />
                      </div>
                    )
                  })
                : null}
              {filterTitles(blogs, searchKeyword).length === 0 ? (
                <span className="mb-[50px] text-center text-4xl text-gray-500 md:col-span-4">
                  {'Sorry! There are no articles'}
                </span>
              ) : null}
            </div>
          </div>
          {filterTitles(blogs, searchKeyword).length !== 0 ? (
            <div className="mb-[50px] flex items-center justify-center gap-[10px]">
              <ChevronLeftIcon className="h-5 w-5 text-gray-300" />
              <span className="text-[18px] text-[#14B8A6]">1</span>
              <ChevronRightIcon className="h-5 w-5 text-gray-300" />
            </div>
          ) : null}
        </section>
      </SimpleLayout>
    </>
  )
}
