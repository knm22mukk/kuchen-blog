import type { GetStaticProps, NextPage } from 'next';
import { Hero } from '@/components/Hero';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { client } from '@/libs/client';
import { Blog } from '@/types/blog';

type Props = {
  blogs: Blog[];
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await client.get({ endpoint: 'blogs', queries: { limit: 4 } });
  return {
    props: {
      blogs: blogData.contents,
    },
  };
};

const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <Layout>
      <SEO />
      <Hero blogs={blogs} />
    </Layout>
  );
};

export default Home;
