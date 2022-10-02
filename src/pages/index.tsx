import type { NextPage } from 'next';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <div className='bg-red-200 p-6 font-bold text-red-500'>ここから始めるくーへんブログ</div>
    </Layout>
  );
};

export default Home;
