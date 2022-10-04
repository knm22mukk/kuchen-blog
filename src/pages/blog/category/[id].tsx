import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { siteMetaData } from '@/data/siteMetaData';
import { client } from '@/libs/client';
import { Blog } from '@/types/blog';

type Props = {
  blogs: Blog[];
  categoryName: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const categoryData = await client.get({ endpoint: 'categories' });
  const paths = categoryData.contents.map(
    (content: { id: string }) => `/blog/category/${content.id}`,
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: string = String(context.params?.id);
  const blogData = await client.get({
    endpoint: 'blogs',
    queries: { filters: `category[equals]${id}` },
  });
  return {
    props: {
      blogs: blogData.contents,
      categoryName: blogData.contents[0].category.name,
    },
  };
};

const categoryID: NextPage<Props> = ({ blogs, categoryName }) => {
  if (blogs.length === 0) {
    return <div>ブログコンテンツがありません。</div>;
  }
  return (
    <Layout>
      <SEO
        pageTitle={`${categoryName}の記事一覧 | くーへんブログ`}
        pageDescription={`${categoryName}についてくーへんのブログ記事一覧です。`}
        pagePath={`${siteMetaData.siteUrl}/blog/category/${categoryName}`}
      />
      <Breadcrumb lists={[{ title: 'BLOG', path: '/blog' }, { title: categoryName }]} />
      <h2>カテゴリー：{categoryName}の記事一覧</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default categoryID;
