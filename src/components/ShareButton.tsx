import { FC } from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LineIcon,
  TwitterIcon,
} from 'react-share';

import { Blog } from '@/types/blog';

type Props = {
  blog: Blog;
};

export const ShareButton: FC<Props> = ({ blog }) => {
  const URL = `https://kuchen-blog.net/blog/${blog.title}`;
  return (
    <div className='container m-4 py-8'>
      <h4 className='text-center font-bold'>この記事がよければシェアをお願いします！！</h4>
      <div className='flex justify-center py-4'>
        <EmailShareButton url={URL} subject={`${blog.title} || くーへんブログ`} className='mx-4'>
          <EmailIcon size={40} round />
        </EmailShareButton>
        <FacebookShareButton url={URL} hashtag='くーへんブログ' className='mx-4'>
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={URL}
          title={`${blog.title} || くーへんブログ`}
          hashtags={['くーへんブログ']}
          className='mx-4'
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>
        <LineShareButton url={URL} title={blog.title} className='mx-4'>
          <LineIcon size={40} round />
        </LineShareButton>
      </div>
    </div>
  );
};
