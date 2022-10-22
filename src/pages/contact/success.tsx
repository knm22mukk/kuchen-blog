import { NextPage } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { SectionHeader } from '@/components/SectionHeader';
import { siteMetaData } from '@/data/siteMetaData';

const contactSuccess: NextPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle='メールが送信できました | くーへんブログ'
        pageDescription='メールお問い合わせいただきありがとうございます。数日以内にご回答ご連絡いたします。'
        pagePath={`${siteMetaData.siteUrl}/contact/success`}
      />
      <Breadcrumb lists={[{ title: 'お問い合わせ', path: '/contact' }, { title: '送信成功' }]} />
      <SectionHeader subHeading='SUCCESS' title='お問合せ送信完了しました' />
      <div className='container'>
        <h2 className='my-3'>
          お問合せご連絡ありがとうございます。内容確認させていただき、2、3日以内にご回答をご連絡させていただきます。
        </h2>
        <div className='my-8 flex justify-center'>
          <Link href='/'>
            <a className='baseButton mx-2'>ホームに戻る</a>
          </Link>
          <Link href='/blog'>
            <a className='baseButton mx-2'>ブログ記事一覧</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default contactSuccess;
