import React from 'react';
import Head from 'next/head';

const GA_ID = process.env.NEXT_PUBLIC_GTM;

const GaTags = (): JSX.Element => {
  return (
    <Head>
      {/* Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `
        }}
      />
      {/* End Google Analytics */}
    </Head>
  );
};

export default GaTags;
