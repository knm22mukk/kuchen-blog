import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/hybrid.css';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Article } from '@/components/Article';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';
import { ShareButton } from '@/components/ShareButton';
import { ToContact } from '@/components/ToContact';
import { siteMetaData } from '@/data/siteMetaData';
import { client } from '@/libs/client';
import { Blog } from '@/types/blog';

type Props = {
  blog: Blog;
  highlightBody: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  const paths = data.contents.map((content: { id: string }) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const data = await client.get<Blog>({ endpoint: 'blogs', contentId: id });
  const newBody = data.body.map((obj) => {
    const newObj = obj.richText || obj.htmlText;
    return newObj;
  });
  const joinBody = newBody.join('');
  // eslint-disable-next-line import/no-named-as-default-member
  const $ = cheerio.load(joinBody);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  return {
    props: {
      blog: data,
      highlightBody: $.html(),
    },
  };
};

const blogId: NextPage<Props> = ({ blog, highlightBody }) => {
  return (
    <Layout>
      <SEO
        pageTitle={`${blog.title} | くーへんブログ`}
        pageDescription={blog.description}
        pagePath={`${siteMetaData.siteUrl}/blog/${blog.id}`}
        pageImage={blog.image.url}
      />
      <Breadcrumb lists={[{ title: 'ブログ', path: '/blog/page/1' }, { title: blog.title }]} />
      <Article blog={blog} highlightBody={highlightBody} />
      <ShareButton blog={blog} />
      <ToContact />
    </Layout>
  );
};

export default blogId;
