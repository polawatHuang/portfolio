import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

// Props type
// setSearchKeyword: useState('')
export const SearchAndFilterComponent = ({ setSearchKeyword, total }) => {
  return (
    <div className="relative mb-[30px] flex w-full items-center justify-between gap-[30px] px-[1.8em] lg:mx-auto lg:max-w-[90.625rem]">
      <div className="relative rounded-[30px] border-[1px] border-gray-300 px-4 py-1 !ring-0 md:w-[50%] lg:w-[30%]">
        <input
          type="text"
          id="search"
          autoComplete="none"
          placeholder={
            'en' === 'th' ? 'ค้นหาชื่อบทความ...' : 'Search for article names...'
          }
          title="Type in a name"
          onKeyUp={(e) => {
            setSearchKeyword(e.target.value)
          }}
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
