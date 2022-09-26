import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { headerNavLinks } from '@/data/headerNavLinks';

export const Footer: FC = () => {
  return (
    <footer className='flex flex-col items-center'>
      <Image src='/images/logo500x180.png' width={250} height={90} alt='kuchen blog' />
      <div className='py-5'>
        {headerNavLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <a className='mx-4 border-b-2 border-transparent py-2 font-bold text-gray-700 transition duration-300 hover:border-indigo-600 hover:text-indigo-600 hover:opacity-80'>
              {link.title}
            </a>
          </Link>
        ))}
      </div>
      <p className='mt-5 text-center text-sm font-medium tracking-wide text-gray-600'>
        &copy; Copyright 2022, Daikoku Industry.co.ltd. All Rights Reserved.
      </p>
    </footer>
  );
};
