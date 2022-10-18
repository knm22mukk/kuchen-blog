import { NextPage } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { SectionHeader } from '@/components/SectionHeader';
import { PrivacyPolicy } from '@/data/PrivacyPolicy';
import { siteMetaData } from '@/data/siteMetaData';
import styles from '@/styles/article.module.css';

const privacypolicy: NextPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle='プライバシーポリシー | くーへんブログ'
        pageDescription='くーへんブログのプライバシーポリシーを記載しています。'
        pagePath={`${siteMetaData.siteUrl}/privacypolicy`}
      />
      <Breadcrumb lists={[{ title: 'プライバシーポリシー' }]} />
      <SectionHeader subHeading='PRIVACY POLICY' title='プライバシーポリシー' />
      <div className='container'>
        <div
          dangerouslySetInnerHTML={{
            __html: `${PrivacyPolicy.body}`,
          }}
          className={`prose max-w-none dark:prose-invert ${styles.article_style}`}
        />
      </div>
    </Layout>
  );
};

export default privacypolicy;
