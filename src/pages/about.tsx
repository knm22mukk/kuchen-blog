import { NextPage } from 'next';
import Image from 'next/image';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { SectionHeader } from '@/components/SectionHeader';
import { profileData } from '@/data/profileData';
import { siteMetaData } from '@/data/siteMetaData';
import styles from '@/styles/article.module.css';

const about: NextPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle='くーへんとは？ | くーへんブログ'
        pageDescription='簡単に管理人くーへんの自己紹介をさせていただきます。よければTwitterのフォローもお願いします。'
        pagePath={`${siteMetaData.siteUrl}/about`}
      />
      <Breadcrumb lists={[{ title: 'ABOUT' }]} />
      <SectionHeader subHeading='ABOUT' title='くーへんの自己紹介' />
      <div className='container'>
        <div className='my-4'>
          <Image
            width={500}
            height={500}
            src={profileData.image.url}
            alt='くーへんプロフィール画像'
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${profileData.body}`,
          }}
          className={`prose max-w-none dark:prose-invert ${styles.article_style}`}
        />
      </div>
    </Layout>
  );
};

export default about;
