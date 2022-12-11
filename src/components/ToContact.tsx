import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineMessage, AiOutlineTwitter } from 'react-icons/ai';

export const ToContact: FC = () => {
  return (
    <div className='container m-4 rounded-lg bg-indigo-600 py-6 text-white'>
      <div className='container py-4'>
        <div className='flex flex-col items-center'>
          <p className='mb-2 font-bold text-white'>CONTACT ME</p>
          <h2 className='w-full text-center text-3xl font-black tracking-wide'>
            お問い合わせはこちらから
          </h2>
        </div>
      </div>
      <p className='mt-4 text-center text-lg font-medium md:text-left'>
        ブログの記事や運営に関すること、不具合などございましたらお気軽にお問い合わせください。お問い合わせは下記リンクのお問い合わせページか、TwitterのDMにてお送りいただけますと幸いです。なるべくお早めにお返事させていただきます。
      </p>
      <div className='my-3 flex flex-col items-center py-5'>
        <Link href='/contact'>
          <a>
            <button className='outlineButton mb-4 inline-flex items-center'>
              <AiOutlineMessage className='mr-2 text-2xl' />
              お問い合わせページ
            </button>
          </a>
        </Link>
        <Link href='https://twitter.com/kuchen_22'>
          <a target='_brank'>
            <button className='outlineButton inline-flex items-center'>
              <AiOutlineTwitter className='mr-2 text-2xl' />
              <span>Twitter</span>
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};
