import { FC, ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ReturnToTopButton } from '@/components/ReturnToTopButton';
import { Sidebar } from '@/components/Sidebar';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='grid grid-cols-1 gap-6 px-4 py-[60px] md:mx-auto md:max-w-7xl md:grid-cols-3 xl:px-0'>
        <section className='md:col-span-2'>{children}</section>
        <div className='md:col-start-3'>
          <Sidebar />
        </div>
      </main>
      <ReturnToTopButton />
      <Footer />
    </>
  );
};
