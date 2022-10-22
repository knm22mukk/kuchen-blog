import { NextPage } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ContactForm } from '@/components/ContactForm';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { SectionHeader } from '@/components/SectionHeader';
import { siteMetaData } from '@/data/siteMetaData';

const contact: NextPage = () => {
  return (
    <Layout>
      <SEO
        pageTitle='お問い合わせページ | くーへんブログ'
        pageDescription='ブログ記事の内容、運営に関するご質問等がありましたらお気軽にフォームからご連絡ください。'
        pagePath={`${siteMetaData.siteUrl}/contact`}
      />
      <Breadcrumb lists={[{ title: 'お問い合わせ' }]} />
      <SectionHeader subHeading='CONTACT' title='お問い合わせ' />
      <ContactForm />
    </Layout>
  );
};

export default contact;
