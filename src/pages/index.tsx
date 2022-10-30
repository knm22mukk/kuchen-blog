import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { BlogGrid } from '@/components/BlogGrid';
import { Hero } from '@/components/Hero';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { SectionHeader } from '@/components/SectionHeader';
import { ToContact } from '@/components/ToContact';
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
      <Hero />
      <div className='py-8'>
        <SectionHeader subHeading='LATEST' title='最新記事' />
        <BlogGrid blogs={blogs} />
        <div className='mx-auto flex justify-center'>
          <Link href='/blog'>
            <a className='baseButton'>記事一覧</a>
          </Link>
        </div>
      </div>
      <ToContact />
    </Layout>
  );
};

export default Home;
