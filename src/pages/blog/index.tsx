import { NextPage } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { siteMetaData } from '@/data/siteMetaData';

const Blog: NextPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle='ブログ一覧ページ | くーへんブログ'
        pageDescription='サラリーマンくーへんが仕事のこと、日常のことを気ままに発信していきます。'
        pagePath={`${siteMetaData.siteUrl}/about`}
      />
      <Breadcrumb lists={[{ title: 'BLOG' }]} />
    </Layout>
  );
};

export default Blog;
