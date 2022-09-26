import { FC, ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='py-8'>{children}</main>
      <Footer />
    </>
  );
};
