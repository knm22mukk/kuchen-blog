import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MobileNav } from './MobileNav';
import { headerNavLinks } from '@/data/headerNavLinks';

export const Header: FC = () => {
  return (
    <header className='flex h-24 items-center justify-around'>
      <Link href='/'>
        <a>
          <Image src='/images/logo500x180.png' width={250} height={90} alt='kuchen blog' />
        </a>
      </Link>
      <div className='flex items-center justify-center'>
        <div className='hidden px-3 md:block'>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className='border-b-2 border-transparent p-3 font-bold duration-300 hover:border-indigo-600 hover:text-indigo-600'>
                {link.title}
              </a>
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  );
};
