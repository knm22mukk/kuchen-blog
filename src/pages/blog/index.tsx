import { NextPage } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { siteMetaData } from '@/data/siteMetaData';
import { client } from '@/libs/client';
import { Blog, Category } from '@/types/blog';

export const getStaticProps = async () => {
  const blogData = await client.get({ endpoint: 'blogs' });
  const categoryData = await client.get({ endpoint: 'categories' });

  return {
    props: {
      blogs: blogData.contents,
      categories: categoryData.contents,
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
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <br />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={`/blog/category/${category.id}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
