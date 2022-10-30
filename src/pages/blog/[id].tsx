import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Article } from '@/components/Article';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { ToContact } from '@/components/ToContact';
import { siteMetaData } from '@/data/siteMetaData';
import { client } from '@/libs/client';
import { Blog } from '@/types/blog';

type Props = {
  blog: Blog;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  const paths = data.contents.map((content: { id: string }) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const data = await client.get({ endpoint: 'blogs', contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};

const blogId: NextPage<Props> = ({ blog }) => {
  return (
    <Layout>
      <SEO
        pageTitle='ブログ一覧ページ | くーへんブログ'
        pageDescription='サラリーマンくーへんが仕事のこと、日常のことを気ままに発信していきます。'
        pagePath={`${siteMetaData.siteUrl}/about`}
      />
      <Breadcrumb lists={[{ title: 'ブログ', path: '/blog' }, { title: blog.title }]} />
      <Article blog={blog} />
      <ToContact />
    </Layout>
  );
};

export default blogId;
