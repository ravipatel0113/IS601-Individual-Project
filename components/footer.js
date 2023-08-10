import mainStyles from '../styles/main.module.css'
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBook, faBullhorn, faEnvelope, faPhone, faFile, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


import { useState } from "react";
export default function Footer() {
    // const [state, setState] = useState(0);
    // const [errorMsg, setErrorMsg] = useState("");
    // // 0 - initial , 1 - loading, 2 - success, 2 - error
    // const subscribe = async (e) => {
    // e.preventDefault();

    // setState(1);
    // setErrorMsg("");
    // console.log(e.target[0].value);
    // try {
    //   const res = await fetch("/api/newsletter", {
    //     method: "POST",
    //     body: e.target[0].value,
    //   });

    //   const data = await res.json();
    //   if (data.error !== null) {
    //     throw data.error;
    //   }
    //   setState(2);
    // } catch (e) {
    //   setErrorMsg(e);
    //   setState(3);
    // }
    // };
    return (
    <>
        <footer className={mainStyles.footer}>

        <div className={mainStyles.footerlink}>
        <Link href="/">
            <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link href="/posts/about-me">
            <FontAwesomeIcon icon={faUser} /> About Me
        </Link>
        <Link href='/posts/project'>
            <FontAwesomeIcon icon={faProjectDiagram} /> Projects
        </Link>
        <Link href='/posts/education'>
            <FontAwesomeIcon icon={faBook} /> Education
        </Link>
        <Link href="/privacy.html" target= '_blank'>
                <FontAwesomeIcon icon={faFile} /> Privacy Policy
        </Link>
        </div>

        <div className={mainStyles.footerlink}>

            <a href="mailto:example@example.com"><FontAwesomeIcon icon={faEnvelope} /> Email</a>
            <a href="https://www.linkedin.com/in/ravi-patel-0113"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            <a href="https://github.com/ravipatel0113"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
            <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
        </div>
        </footer>
    </>
    );
}