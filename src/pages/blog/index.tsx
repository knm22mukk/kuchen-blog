import { NextPage } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';

const Blog: NextPage = () => {
  return (
    <Layout>
      <SEO />
      <Breadcrumb lists={[{ title: 'BLOG' }]} />
    </Layout>
  );
};

export default Blog;
