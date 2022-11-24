import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { ChangeThemeButton } from '@/components/ChangeThemeButton';
import { MobileNav } from '@/components/MobileNav';
import { headerNavLinks } from '@/data/headerNavLinks';

export const Header: FC = () => {
  return (
    <header className='flex h-24 items-center justify-around shadow'>
      <Link href='/'>
        <a>
          <Image
            src='/images/logo250x90.png'
            width={250}
            height={90}
            alt='kuchen blog'
            className='h-[90px] w-[250px] object-cover'
          />
        </a>
      </Link>
      <div className='flex items-center justify-center'>
        <div className='hidden md:block'>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a className='textLink'>{link.title}</a>
            </Link>
          ))}
        </div>
        <MobileNav />
        <ChangeThemeButton />
      </div>
    </header>
  );
};
