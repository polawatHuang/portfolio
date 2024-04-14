'use client'
import React, { useState } from 'react'
import { SearchAndFilterComponent } from '@/components/SearchAndFilterComponent'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { blogs } from '@/lib/blogs'
import { BlogCardComponent } from '@/components/BlogCardComponent'
import { SimpleLayout } from '@/components/SimpleLayout'
import '@/styles/tailwind.css'
import Layout from "@/pages/layout"

const filterTitles = (dataArray: any, keyword: any) => {
  return dataArray.filter((item: any) =>
    item.title.toLowerCase().includes(keyword.toLowerCase()),
  )
}

export default function Articles() {
  const [searchKeyword, setSearchKeyword] = useState('')

  return (
    <Layout>
      <SimpleLayout title="Articles" intro="">
        <section id="section-blogs" className="">
          <SearchAndFilterComponent
            setSearchKeyword={setSearchKeyword}
            total={blogs.length}
          />
          <div className="my-[50px]">
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">
              {blogs
                ? filterTitles(blogs, searchKeyword).map((item: any) => {
                    return (
                      <div key={item.title}>
                        <BlogCardComponent
                          image={item.image}
                          logo={'/'}
                          date={item.date}
                          href={'/articles/' + item.slug}
                          title={item.title}
                          description={item.desc}
                        />
                      </div>
                    )
                  })
                : null}
              {filterTitles(blogs, searchKeyword).length === 0 ? (
                <div className="mt-[30vw] text-center text-4xl text-gray-500 md:col-span-4">
                  <div className="flex items-center">
                  {'Sorry! There are no articles'}
                  </div>
                </div>
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
    </Layout>
  )
}
