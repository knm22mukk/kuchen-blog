import Head from 'next/head';
import { FC } from 'react';

import { siteMetaData } from '@/data/siteMetaData';

type Props = {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImage?: string;
  pageImageWidth?: number;
  pageImageHeight?: number;
};

export const SEO: FC<Props> = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImage,
  pageImageWidth,
  pageImageHeight,
}) => {
  const title = pageTitle ? pageTitle : siteMetaData.title;
  const description = pageDescription ? pageDescription : siteMetaData.description;
  const url = pagePath ? pagePath : siteMetaData.siteUrl;
  const imgUrl = pageImage ? pageImage : siteMetaData.siteLogo;
  const imgWidth = pageImageWidth ? pageImageWidth : 1280;
  const imgHeight = pageImageHeight ? pageImageHeight : 640;
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      <title>{title}</title>
      <meta name='description' content={description} />

      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={imgUrl} />
      <meta property='og:image:width' content={String(imgWidth)} />
      <meta property='og:image:height' content={String(imgHeight)} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={`@${siteMetaData.twitter}`} />
      <meta name='twitter:pageTitle' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imgUrl} />

      <link rel='canonical' href={url} />
    </Head>
  );
};
