import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BlogGrid } from '@/components/BlogGrid';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { Pagination } from '@/components/Pagination';
import { SEO } from '@/components/SEO';
import { SectionHeader } from '@/components/SectionHeader';
import { ToContact } from '@/components/ToContact';
import { siteMetaData } from '@/data/siteMetaData';
import { client } from '@/libs/client';
import { Blog } from '@/types/blog';

const PER_PAGE = 12;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogData = await client.get({ endpoint: 'blogs' });
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  const paths = range(1, Math.ceil(blogData.totalCount / PER_PAGE)).map((i) => `/blog/page/${i}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = Number(context.params?.id);
  const blogData = await client.get({
    endpoint: 'blogs',
    queries: { offset: (pageId - 1) * PER_PAGE, limit: PER_PAGE },
  });

  return {
    props: {
      blogs: blogData.contents,
      totalCount: blogData.totalCount,
      currentPage: pageId,
    },
  };
};

type Props = {
  blogs: Blog[];
  totalCount: number;
  currentPage: number;
};

const BlogPageId: NextPage<Props> = ({ blogs, totalCount, currentPage }) => {
  return (
    <Layout>
      <SEO
        pageTitle='ブログ一覧ページ | くーへんブログ'
        pageDescription='サラリーマンくーへんが仕事のこと、日常のことを気ままに発信していきます。'
        pagePath={`${siteMetaData.siteUrl}/blog/page/1`}
      />
      <Breadcrumb lists={[{ title: 'ブログ' }]} />
      <SectionHeader subHeading='BLOG' title='ブログ記事一覧' />
      <BlogGrid blogs={blogs} />
      <Pagination
        currentPageNumber={currentPage}
        totalCount={totalCount}
        BLOG_PER_PAGE={PER_PAGE}
      />
      <ToContact />
    </Layout>
  );
};

export default BlogPageId;
