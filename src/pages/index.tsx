import type { NextPage } from 'next';
import { Layout } from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='bg-red-200 p-6 font-bold text-red-500'>ここから始めるくーへんブログ</div>
    </Layout>
  );
};

export default Home;
