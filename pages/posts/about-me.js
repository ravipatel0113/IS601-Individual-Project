import Link from 'next/link';
import Head from 'next/head';

export default function AboutMePost() {
    return (
    <>
    <Head>
    <title>About Me</title>
          <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>About Me</h1>
    <h2>
        <Link href="/">Back to home</Link>
    </h2>
    </>
    );
  }