import Link from 'next/link';
import { FC, useState } from 'react';
import { headerNavLinks } from '@/data/headerNavLinks';

export const MobileNav: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='px-3 md:hidden'>
      <button aria-label='ToggleMenu' type='button' onClick={handleClick}>
        {open ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-8 w-8'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='h-8 w-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        )}
      </button>
      <div
        className={`fixed top-24 right-0 z-10 h-full w-full bg-gray-300 opacity-95 duration-300 ease-in-out ${
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
