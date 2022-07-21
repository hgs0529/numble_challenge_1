import Head from "next/head";
import React from "react";

interface HeadMetaProps {
  title?: string;
  url?: string;
  image?: string;
  description?: string;
}

const HeadMeta = ({
  title = "쿠팡",
  url = "localhost:3000",
  description = "쿠팡",
  image,
}: HeadMetaProps) => {
  return (
    <Head>
      <title>쿠팡{` | ${title}`}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default HeadMeta;
