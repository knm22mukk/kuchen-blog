import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineCheck, AiOutlineArrowRight } from 'react-icons/ai';

import { SectionHeader } from '@/components/SectionHeader';
import { featureTexts } from '@/data/featureTexts';

export const Hero: FC = () => {
  return (
    <section>
      <div className=''>
        <Image
          src='/images/kuchen-blog-hero.png'
          alt='くーへんブログ'
          width={1280}
          height={700}
          className='object-cover'
        />
      </div>
      <div className='py-8'>
        <SectionHeader subHeading='CATEGORIES' title='こんなことブログに書きます！' />
        <div className='container grid gap-8 py-5 lg:grid-cols-2'>
          {featureTexts.map((text, index) => (
            <div key={index} className='flex max-w-md flex-col sm:mx-auto sm:flex-row'>
              <div className='mr-4'>
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100'>
                  <AiOutlineCheck className='h-8 w-8 text-indigo-600' />
                </div>
              </div>
              <div>
                <h3 className='mb-3 text-xl font-bold leading-5'>{text.title}</h3>
                <p className='mb-3 text-sm'>{text.paragragh}</p>
                <Link href={text.href}>
                  <a className='textLink inline-flex items-center text-lg text-indigo-600 dark:text-blue-400'>
                    <AiOutlineArrowRight className='mr-3' />
                    記事を見てみる
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
