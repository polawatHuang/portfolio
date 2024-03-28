
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, PinterestShareButton, EmailShareButton } from 'react-share';

interface ISocialShareProps {
  facebook: string;
  twitter: string;
  linkedin: string;
  pinterest: string;
  email: string;
}

const SocialShare: React.FC<ISocialShareProps> = ({ facebook, twitter, linkedin, pinterest, email }) => {
  return (<div className="flex flex-col gap-4">
    <FacebookShareButton
      url={facebook}
    >
      <img src="/assets/icons/ic-facebook.svg" alt="icon-facebook" />
    </FacebookShareButton>
    <TwitterShareButton
      url={twitter}
    >
      <img src="/assets/icons/twitter-x-logo-black-square-20853.png" alt="icon-twitter" width={20} height={20} className="rounded-sm" />
    </TwitterShareButton>
    <LinkedinShareButton
      url={linkedin}
    >
      <img src="/assets/icons/ic-linkedin.svg" alt="icon-linkedin" />
    </LinkedinShareButton>
    <PinterestShareButton
      url={pinterest}
      media={pinterest}
    >
      <img src="/assets/icons/ic-pinterest.svg" alt="icon-pinterest" />
    </PinterestShareButton>
    <EmailShareButton
      url={email}
    >
      <img src="/assets/icons/ic-email.svg" alt="icon-email" />
    </EmailShareButton>
  </div>)
}

export default SocialShare