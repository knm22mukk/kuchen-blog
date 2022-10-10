import { NextPage } from 'next';
import { Article } from '@/components/Article';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { profileData } from '@/data/profileData';
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
      <Article blog={profileData} />
    </Layout>
  );
};

export default about;
