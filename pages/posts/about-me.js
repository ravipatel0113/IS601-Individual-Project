import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import aboutStyle from '../../styles/about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDatabase, faFileExcel, faServer} from '@fortawesome/free-solid-svg-icons';
import * as code from '@fortawesome/free-brands-svg-icons';

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
      {/* <Script data-main="scripts/main" src="scripts/require.js"></Script> */}
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-yUdhdVwK+j3gE1+0fShz3t9Qm1HF/PeJT4sOoCEXAHNRSF2uJo4o0Cds5d8tRdT2W9/vd0k21f6CzOKAbeqzQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> */}

    </Head>
    <main>
      <h1 className= {aboutStyle.h1_about}>About Me</h1>
      <section>
            <h2 className= {aboutStyle.h2}>Skills</h2>
            <div className= {aboutStyle.skills}>
                  <FontAwesomeIcon icon={code.faPython} /> Python
                  <FontAwesomeIcon icon={code.faHtml5} /> HTML
                  <FontAwesomeIcon icon={code.faPhp} /> Php
                  <FontAwesomeIcon icon={faFileExcel} /> Excel
                  <FontAwesomeIcon icon={code.faRProject} /> R
                  <FontAwesomeIcon icon={code.faReact} /> React
                  <FontAwesomeIcon icon={faDatabase} /> Mongo
                  <FontAwesomeIcon icon={faServer} /> SQL
                  <FontAwesomeIcon icon={code.faJs} /> JavaScript
                  <FontAwesomeIcon icon={code.faNodeJs} /> NodeJs
                  <FontAwesomeIcon icon={code.faCss3} /> CSS
                  <FontAwesomeIcon icon={code.faAws} /> AWS
                  <FontAwesomeIcon icon={code.faDocker} /> Docker
                  <FontAwesomeIcon icon={code.faMailchimp} /> Mailchimp
                  <FontAwesomeIcon icon={code.faJava} /> Java
                  <FontAwesomeIcon icon={code.faAtlassian} /> Agile
                  <FontAwesomeIcon icon={code.faDev} /> DevOps
            </div>
      </section>
      <section>
            <h2 className= {aboutStyle.h2}>Experience</h2>
            <article>
                  <h3 className= {aboutStyle.jobTitle}><u> Data Analytics Specialist | Selective Insurance Company of America, Branchville, NJ, USA </u></h3>
                  <div className= {aboutStyle.desc}>
                        <h4> 03/2023 - Present </h4>

                        <p> Part of an Internal Audit to bring a systematic, disciplined approach to evaluate and improve the effectiveness of risk management. Work primarily on Alteryx for understanding the dataset supporting the auditors review the policies and rules efficiently. Work with the independent team reporting directly to the board of committee. Act as a third line of defense. Further reviewing the dataset quarterly and projecting the result in the form of visualization, creating dashboard using Power BI. </p>

                        <i> Key Accomplishments: </i>

                        <ul>
                        <li> Work within Alteryx and Python to manipulate and re-format the data for various comparisons. </li>
                        <li> Automation of Audit process by generating data files containing mis-match and error in the policies. </li>
                        <li> Use Power BI for generating Dashboards and visual effect representing Audit progress ever quarter. </li>
                        <li> Working with various file formats for extraction and generating datasets. (i.e., PDF, EXCEL, TXT, WORD, etc.) </li>
                        </ul>
                  </div>
            </article>

      </section>

    </main>
    </>
    );
  }