import Link from 'next/link';
import { FC, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { headerNavLinks } from '@/data/headerNavLinks';

export const MobileNav: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <div className='mx-3 md:hidden'>
      <button aria-label='ToggleMenu' type='button' onClick={handleClick} className='text-3xl'>
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
      <div
        className={`fixed top-24 right-0 z-20 h-full w-full bg-gray-300 opacity-95 duration-300 ease-in-out dark:bg-gray-600 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className='fixed h-full w-full py-10'>
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a
                className='flex justify-center py-5 text-2xl font-bold tracking-wide hover:text-indigo-600'
                onClick={handleClick}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
