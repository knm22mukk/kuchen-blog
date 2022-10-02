import { NextPage } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';

const about: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <Breadcrumb lists={[{ title: 'ABOUT' }]} />
    </Layout>
  );
};

export default about;
