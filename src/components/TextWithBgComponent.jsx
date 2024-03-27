import Image from 'next/image'
import imageBg from '@/images/polawat-profile-picture.webp'
import { FadeIn } from './FadeIn'

// Props type
// title: string;
// backgroundImage: HTMLElementImage;

export const TextWithBgComponent = ({ title, backgroundImage }) => {
  return (
    <div
      id="text-with-bg-component"
      className="relative flex h-[400px] w-full items-center justify-center bg-gray-700/80"
    >
    <Image src={backgroundImage? backgroundImage : imageBg} alt={title} fill className="absolute object-cover z-[-1]"  />
      <FadeIn>
        <h1 className="max-w-[900px] text-center text-white font-display text-3xl font-medium tracking-tight text-slate-900 lg:text-[70px] lg:leading-[75px]">
          {title}
        </h1>
      </FadeIn>
    </div>
  )
}
