import { NextPage } from 'next';
import Link from 'next/link';
import { BlogCard } from '@/components/BlogCard';
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
      <div className='container mx-auto'>
        <div className='grid gap-4 py-16 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              path={`/blog/${blog.id}`}
              title={blog.title}
              description={blog.description}
              imageSrc={blog.image.url}
              date={blog.publishedAt}
            />
          ))}
        </div>
      </div>
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
