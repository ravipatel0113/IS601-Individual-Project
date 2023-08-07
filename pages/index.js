import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import mainStyles from '../styles/main.module.css';
import Script from 'next/script';
import React from 'react';

export default function Home() {
    return(
      <>
        <Head>
            <title>My Portfolio</title>
            <meta
            name="description"
            content="Welcome to my Portfolio."
            />
            <meta name="twitter:card" content="summary_large_image" />
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
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <section className= {mainStyles.heroSection}>
          <div className= {mainStyles.hero}>

            <h2 className= {mainStyles.h2}> Welcome</h2>
            <h1 className= {mainStyles.h1}> I’m Ravikumar Patel</h1>
            <h1 className= {mainStyles.h1_2}>Master Of Data Science Student</h1>
            <div className= {mainStyles.subtext}>
            Data Driven Data Analyst Specalists
            </div>
          </div>

          <div className= {mainStyles.hero}>
                <Image 
                  className= {mainStyles.heroimage} 
                  src= "/images/profile.jpg" 
                  alt="Profile Picture"
                  priority='True'
                  width= {394}
                  height= {394}/>
          </div>
        </section>
        
        <section className= {mainStyles.bio}>
          <div >
              <p>Highly motivated technology graduate seeking a challenging opportunity to learn and gain experience to enhance career and support goals of a growth-oriented organization. Also, a driven Data Analyst with a passion for condensing large data into a business strategy. Quickly adept at working independently and collaborating with a team by guiding and breaking the workload to diverse audiences. Detailed oriented, critical thinker who is versatile to adopt the modern working environment.</p>
          </div>
        </section>
        <section className={mainStyles.subscribeSection}>
          <div id="mc_embed_shell">
            <Link href="/cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" ></Link>
            <div id="mc_embed_signup">
                <form action="https://njit.us9.list-manage.com/subscribe/post?u=3d0b19ed396d6468d588f214e&amp;id=366234b116&amp;v_id=4559&amp;f_id=001013e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                    <div id="mc_embed_signup_scroll" className={mainStyles.subscribe}>
                        
                        <h2 className={mainStyles.h2_sub}>Subscribe</h2>
                        <div className= {mainStyles.formText}>
                            <label for="mce-EMAIL">
                                Email Address:
                            </label>
                            <input type="email" name="EMAIL" className={mainStyles.emailaddress} id="mce-EMAIL" required="" >

                            </input>
                            <span id="mce-EMAIL-HELPERTEXT" className="helper_text">

                            </span>
                        </div>
                        <div id="mergeRow-gdpr" className= {mainStyles.formText}>
                            <div className="content__gdpr">
                                <p>Please select all the ways you would like to hear from Ravi:</p>
                                <fieldset name="interestgroup_field" className= {mainStyles.checkBox}>
                                    <label className="checkbox subfield" for="gdpr40083">
                                        <input type="checkbox" id="gdpr_40083" name="gdpr[40083]" ></input>
                                        <span>Email</span>
                                    </label>
                                </fieldset>
                            </div>
                                
                        </div>
                      <div id="mce-responses" className="clear foot">
                          <div className="response" id="mce-error-response" ></div>
                          <div className="response" id="mce-success-response" ></div>
                      </div>
                  
                      <div>   
                          <div>
                              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className={mainStyles.footertext}></input>
                              <p><a href="http://eepurl.com/iwPweY" title="Mailchimp - email marketing made easy and fun"></a></p>        
                          </div>
                      </div>
                    </div>
                </form>
            </div>
          </div>
        </section>
      </>
    );
}