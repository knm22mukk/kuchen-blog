import { NextPage } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { siteMetaData } from '@/data/siteMetaData';

const about: NextPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle='くーへんとは？ | くーへんブログ'
        pageDescription='簡単に管理人くーへんの自己紹介をさせていただきます。よければTwitterのフォローもお願いします。'
        pagePath={`${siteMetaData.siteUrl}/about`}
      />
      <Breadcrumb lists={[{ title: 'ABOUT' }]} />
    </Layout>
  );
};

export default about;
