import Head from 'next/head';
// import Image from 'next/image';
import styles from './layout.module.css';
// import utilStyles from '../styles/main.module.css';
// import Link from 'next/link';
import Header from './header';
import Footer from './footer';

const name = 'Ravikumar Patel';
export const siteTitle = 'MY Portfolio';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        {home ? (
          <>
            
          </>
        ) : (
          <>
            <Header />
          </>
        )}
      </header>
      <main>{children}</main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}