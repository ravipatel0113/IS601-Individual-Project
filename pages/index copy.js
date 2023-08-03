import Link from 'next/link';
import Head from 'next/head';
import mainStyles from '../styles/main.module.css';
import Layout, { siteTitle } from '../components/layout';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBook, faBullhorn, faEnvelope, faPhone, faStore } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { useState } from "react";
export default function Home() {
  const [state, setState] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  // 0 - initial , 1 - loading, 2 - success, 2 - error
const subscribe = async (e) => {
    e.preventDefault();

    setState(1);
    setErrorMsg("");
    console.log(e.target[0].value);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: e.target[0].value,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2);
    } catch (e) {
      setErrorMsg(e);
      setState(3);
    }
  };
return (
  <Layout home>
  <div>
      {/* <p className="font-medium mt-4 text-xl text-green-800">
          Thanks for subscribing, you will receive mail once we launch our
  website.
      </p> */}
    
    {/* <form onSubmit={subscribe} className="flex flex-col mb-9 mt-4">
      <input required placeholder="Email address" type="email" />
      <button type="submit">Subscribe</button>
      {state === 3 ? (
          <p className="text-red-500 mt-3">{errorMsg}</p>
        ) : (
              ""
            )}
    </form> */}
      <Head>
        <title>Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <header>
        <section className={mainStyles.menu}>

          <div className={mainStyles.logoname}>Portfolio</div>

          <div className={mainStyles.pagelink}>

            <Link href="/posts/about-me" className={mainStyles.links}> About Me </Link>

            <Link href="/" className={mainStyles.links}> Projects </Link>

            <Link href="/" className={mainStyles.links}> Passion </Link>
            
          </div>

        </section>
      </header> */}

      <main>
      <h1 className="title">
        Read <Link href="/posts/about-me">this page!</Link>
      </h1>
      </main>
    {/* <!-- Footer Section --> */}
    <footer className={mainStyles.footer}>

      <div className={mainStyles.footertitle}>
          Portfolio
      </div>
      <div className={mainStyles.footerlink}>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link href="/posts/about-me">
          <FontAwesomeIcon icon={faUser} /> About Me
        </Link>
        <Link href='/posts/projects'>
          <FontAwesomeIcon icon={faBook} /> Projects
        </Link>
          {/* <a href="Marketing_strategies.html"><i className="fas fa-bullhorn"></i> Marketing Strategies</a>
          <a href="Buyer Persona.html"><i className="fas fa-user"></i> Buyer Persona</a> */}
      </div>

      <div className={mainStyles.footerlink}>

          <a href="mailto:example@example.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
          <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
          <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
      </div>

      <div className={mainStyles.footerlink}>

          <a href="#"><FontAwesomeIcon icon={faStore} /> Market</a>
          <a href="#"><FontAwesomeIcon icon={faPhone} /> Contact</a>

      </div>

      {/* <!-- Form Section --> */}
      {state == 2 ? (
        <p className="font-medium mt-4 text-xl text-green-800">
            Thanks for subscribing, you will receive mail once we launch our
            website.
        </p>
        ) : (
            <form onSubmit={subscribe} className={mainStyles.newsletterform}>
                <input type = "email" placeholder="Email Address" className={mainStyles.emailaddress} required></input>
                <button type="submit" className={mainStyles.footertext}>Subscribe</button>
                {state === 3 ? (
                  <p className="text-red-500 mt-3">{errorMsg}</p>
                  ) : (
                      ""
                    )
                }
            </form>
        )}
    </footer>
  </div>
  </Layout>
  );
}