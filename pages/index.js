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
            <Script strategy='afterinteractive'
              dangerouslySetInnerHTML={{__html: `id="mcjs">!function(c,h,i,m,p)
              {m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)
              }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/3d0b19ed396d6468d588f214e/38a8859cf31651e09e04538dd.js");`}} />
        </Head>
        <section className= {mainStyles.heroSection}>
          <div className= {mainStyles.hero}>

            <h2 className= {mainStyles.h2}> Welcome</h2>
            <h1 className= {mainStyles.h1}> I’m Ravikumar Patel</h1>
            <h1 className= {mainStyles.h1_2}> Master Of Data Science Student</h1>
            <div className= {mainStyles.subtext}>
            Data Driven Data Analyst Specalists
            </div>
          </div>

          <div className= {mainStyles.hero}>
                <Image 
                  class= {mainStyles.heroimage} 
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
      </>
    );
}