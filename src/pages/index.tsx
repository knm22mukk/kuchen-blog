import type { NextPage } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className='p-6 font-bold text-red-500'>ここから始めるくーへんブログ</div>
      <Footer />
    </>
  );
};

export default Home;
