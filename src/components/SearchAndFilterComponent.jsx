import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

// Props type
// setSearchKeyword: useState('')
export const SearchAndFilterComponent = ({ setSearchKeyword, total }) => {
  return (
    <div className="relative mb-[30px] flex w-full items-center justify-between gap-[30px] px-[1.8em] lg:mx-auto lg:max-w-[90.625rem]">
      <div className="relative md:w-[50%] lg:w-[30%]">
        <input
          type="text"
          aria-label="Search"
          placeholder={
            'en' === 'th' ? 'ค้นหาชื่อบทความ...' : 'Search for article names...'
          }
          onKeyUp={(e) => {
            setSearchKeyword(e.target.value)
          }}
          className="min-w-0 w-full flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <MagnifyingGlassIcon className="absolute right-[2%] top-[50%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] text-[#14B8A6]" />
      </div>
      <div>
        <span className="text-gray-500">
          {'en' === 'th' ? 'ผลการค้นหา' : 'Result'} 1-1{' '}
          {'en' === 'th' ? 'จาก' : 'of'} {0}
        </span>
      </div>
    </div>
  )
}
