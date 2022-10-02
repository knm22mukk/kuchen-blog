import { NextPage } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { siteMetaData } from '@/data/siteMetaData';
import { client } from '@/libs/client';
import { Blog, Category } from '@/types/blog';

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' });
  const category = await client.get({ endpoint: 'categories' });

  return {
    props: {
      blogs: data.contents,
      categories: category.contents,
    },
  };
};

type Props = {
  blogs: Blog[];
  categories: Category[];
};

const Blog: NextPage<Props> = ({ blogs, categories }) => {
  return (
    <Layout>
      <SEO
        pageTitle='ブログ一覧ページ | くーへんブログ'
        pageDescription='サラリーマンくーへんが仕事のこと、日常のことを気ままに発信していきます。'
        pagePath={`${siteMetaData.siteUrl}/about`}
      />
      <Breadcrumb lists={[{ title: 'BLOG' }]} />
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href={`/blog/${blog.id}`}>
            <a>{blog.title}</a>
          </Link>
        </li>
      ))}
    </Layout>
  );
};

export default Blog;
