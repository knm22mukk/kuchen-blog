import { GetStaticProps, NextPage } from 'next';
import { BlogGrid } from '@/components/BlogGrid';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { SectionHeader } from '@/components/SectionHeader';
import { ToContact } from '@/components/ToContact';
import { siteMetaData } from '@/data/siteMetaData';
import { client } from '@/libs/client';
import { Blog } from '@/types/blog';

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await client.get({ endpoint: 'blogs', queries: { limit: 12 } });

  return {
    props: {
      blogs: blogData.contents,
    },
  };
};

type Props = {
  blogs: Blog[];
};

const Blog: NextPage<Props> = ({ blogs }) => {
  return (
    <Layout>
      <SEO
        pageTitle='ブログ一覧ページ | くーへんブログ'
        pageDescription='サラリーマンくーへんが仕事のこと、日常のことを気ままに発信していきます。'
        pagePath={`${siteMetaData.siteUrl}/about`}
      />
      <Breadcrumb lists={[{ title: 'ブログ' }]} />
      <SectionHeader subHeading='BLOG' title='ブログ記事一覧' />
      <BlogGrid blogs={blogs} />
      <ToContact />
    </Layout>
  );
};

export default Blog;
