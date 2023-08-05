import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function AboutMePost() {
    return (
    <>
    <Head>
      <title>About Me</title>
      <Script strategy='afterinteractive' 
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_ID_KEY}`} />
      <Script strategy='afterinteractive'
            dangerouslySetInnerHTML={{ __html : `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.G_ID_KEY}', {
                  page_path: window.location.pathname,
              });
              `,
              }}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>About Me</h1>
    </>
    );
  }