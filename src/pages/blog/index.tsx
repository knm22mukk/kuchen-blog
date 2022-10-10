import { NextPage } from 'next';
import { BlogCard } from '@/components/BlogCard';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { siteMetaData } from '@/data/siteMetaData';
import { client } from '@/libs/client';
import { Blog } from '@/types/blog';

export const getStaticProps = async () => {
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
      <Breadcrumb lists={[{ title: 'BLOG' }]} />
      <div className='container mx-auto py-16'>
        <div className='grid gap-6 sm:grid-cols-2'>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
