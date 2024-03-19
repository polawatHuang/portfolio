import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */

let envImageUnoptimize = process.env.NODE_ENV !== 'production' ? false : true

const nextConfig = {
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
  output: 'static',
  images: {
    unoptimized: envImageUnoptimize,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
