import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineMessage, AiOutlineTwitter } from 'react-icons/ai';
import { SectionHeader } from './SectionHeader';

export const ToContact: FC = () => {
  return (
    <div className='container my-8 rounded-lg bg-indigo-600 py-6 text-white'>
      <SectionHeader subHeading='CONTACT ME' title='お問い合わせはこちらから' />
      <p className='mt-4 text-center text-sm font-medium md:text-left md:text-base lg:text-lg'>
        ブログの記事や運営に関すること、不具合などございましたらお気軽にお問い合わせください。お問い合わせは下記リンクのお問い合わせページか、TwitterのDMにてお送りいただけますと幸いです。なるべくお早めにお返事させていただきます。
      </p>
      <div className='my-3 flex flex-col items-center py-5'>
        <Link href='/contact'>
          <a>
            <button className='outlineButton mb-4 inline-flex items-center'>
              <AiOutlineMessage className='mr-2 h-5 w-5' />
              お問い合わせページ
            </button>
          </a>
        </Link>
        <Link href='https://twitter.com/kuchen_22'>
          <a target='_brank'>
            <button className='outlineButton inline-flex items-center'>
              <AiOutlineTwitter className='mr-2 h-5 w-5' />
              <span>Twitter @kuchen_22</span>
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};
