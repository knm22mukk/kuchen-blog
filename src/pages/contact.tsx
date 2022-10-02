import { NextPage } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';

const contact: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <Breadcrumb lists={[{ title: 'CONTACT' }]} />
    </Layout>
  );
};

export default contact;
