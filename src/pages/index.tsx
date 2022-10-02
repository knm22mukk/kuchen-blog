import type { NextPage } from 'next';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <div className='h-[1000px] p-6 font-bold text-red-500'>ここから始めるくーへんブログ</div>
    </Layout>
  );
};

export default Home;
