
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, PinterestShareButton, EmailShareButton } from 'react-share';
import imageFB from '@/images/logos/ic-facebook.svg'
import imageX from '@/images/logos/twitter-x-logo-black-square.webp'
import imageLinkedIn from '@/images/logos/ic-linkedin.svg'
import imagePin from '@/images/logos/ic-pinterest.svg'
import imageEmail from '@/images/logos/ic-email.svg'
import Image from 'next/image';

interface ISocialShareProps {
  facebook: string;
  twitter: string;
  linkedin: string;
  pinterest: string;
  email: string;
}

const SocialShare: React.FC<ISocialShareProps> = ({ facebook, twitter, linkedin, pinterest, email }) => {
  return (<div className="flex gap-4">
    <FacebookShareButton
      url={facebook}
    >
      <Image src={imageFB} width={20} height={20} alt="icon-facebook" />
    </FacebookShareButton>
    <TwitterShareButton
      url={twitter}
    >
      <Image src={imageX.src} alt="icon-twitter" width={20} height={20} className="rounded-sm" />
    </TwitterShareButton>
    <LinkedinShareButton
      url={linkedin}
    >
      <Image width={20} height={20} src={imageLinkedIn} alt="icon-linkedin" />
    </LinkedinShareButton>
    <PinterestShareButton
      url={pinterest}
      media={pinterest}
    >
      <Image width={20} height={20} src={imagePin} alt="icon-pinterest" />
    </PinterestShareButton>
    <EmailShareButton
      url={email}
    >
      <Image width={20} height={20} src={imageEmail} alt="icon-email" />
    </EmailShareButton>
  </div>)
}

export default SocialShare