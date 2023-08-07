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
    <main>
      {/* <h1 className= {aboutStyle.h1_about}>About Me</h1> */}
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

                        <p> Part of an Internal Audit to bring a systematic, disciplined approach to evaluate and improve the effectiveness of risk management. 
                              Work primarily on Alteryx for understanding the dataset supporting the auditors review the policies and rules efficiently. 
                              Work with the independent team reporting directly to the board of committee. 
                              Act as a third line of defense. 
                              Further reviewing the dataset quarterly and projecting the result in the form of visualization, creating dashboard using Power BI. </p>
                  </div>
            </article>
            <article>
                  <h3 className= {aboutStyle.jobTitle}><u> Data Analyst | Evernorth Health Services (Cigna) | Morris Plains, NJ, USA </u></h3>
                  
                  <div className= {aboutStyle.desc}>
                        <h4> 06/2021 - 01/2023 </h4>

                        <p> Part of a RFSO team helping in providing data project execution and operations support. 
                              Work primarily on Alteryx to think strategically about data and maintaining the correct flow of data. 
                              Work under the agile methodology, supporting the development team to forecast future data manipulations due to change in Medicare/Medicaid. 
                              Campion to drive projects from inception to delivery by working with senior leader and business partners.</p>
                  </div>
                </article>
      </section>
      <section>
            <h2 className= {aboutStyle.h2}>Passion</h2>
            <div className= {aboutStyle.passion}>
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Passionate Data-Driven Problem Solvers
                        </h3>
                        <p>Passionate about using data to solve complex problems. 
                              Ability to demonstrate a systematic and disciplined approach to evaluate and improve risk management in their work as an Internal Auditor.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Proficient in Tools and Technologies
                        </h3>
                        <p>Enthusiastic about working with various data analytics tools and technologies. Leverage tools to manipulate, extract, and analyze data efficiently.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Continuous Learner and Adaptable
                        </h3>
                        <p>Open to learning and adapting to new technologies and methodologies.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Skilled in Visual Storytelling
                        </h3>
                        <p>Passion for data visualization is evident through their use of Power BI.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Attentive to Detail
                        </h3>
                        <p>A strong attention to detail, ensuring data accuracy and reliability.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Driven for Improvement
                        </h3>
                        <p>A proactive approach to continually improving processes and systems.</p>
                  </div>

                  
                  <div className= {aboutStyle.passionDesc}>
                        <h3 className= {aboutStyle.passionTitle}>
                              Collaborative Team Player
                        </h3>
                        <p>Work effectively within teams to achieve common goals.</p>
                  </div>
            </div>
      </section>
    </main>
    </>
    );
  }