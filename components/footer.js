import mainStyles from '../styles/main.module.css'
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBook, faBullhorn, faEnvelope, faPhone, faStore, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


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
        <div id="mc_embed_shell">
                <Link href="/cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" ></Link>
            <div id="mc_embed_signup">
                <form action="https://njit.us9.list-manage.com/subscribe/post?u=3d0b19ed396d6468d588f214e&amp;id=366234b116&amp;v_id=4559&amp;f_id=001013e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                    <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
                        
                        <div className="mc-field-group">
                            <label for="mce-EMAIL">
                                Email Address:
                            </label>
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" >

                            </input>
                            <span id="mce-EMAIL-HELPERTEXT" className="helper_text">

                            </span>
                        </div>
                        <div id="mergeRow-gdpr" className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                            <div className="content__gdpr">
                                <p>Please select all the ways you would like to hear from Ravi:</p>
                                <fieldset className="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">
                                    <label className="checkbox subfield" for="gdpr40083">
                                        <input type="checkbox" id="gdpr_40083" name="gdpr[40083]" className="gdpr" ></input>
                                        <span>Email</span>
                                    </label>
                                </fieldset>
                            </div>
                                
                        </div>
                    <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" ></div>
                        <div className="response" id="mce-success-response" ></div>
                    </div>
                
                    <div className="optionalParent">
                        <div className="clear foot">
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button"></input>
                            <p><a href="http://eepurl.com/iwPweY" title="Mailchimp - email marketing made easy and fun"></a></p>
                                
                        </div>
                    </div>
                </div>
            </form>
            </div>
            </div>

        {/* <!-- Form Section --> */}
        {/* <div> */}
        {/* {state == 2 ? (
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
        )} */}
        {/* </div> */}
        </footer>
    </>
    );
}