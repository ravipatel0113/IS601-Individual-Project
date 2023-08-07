import Head from 'next/head';
import Script from 'next/script';
import educationStyle from '../../styles/education.module.css'

export default function Education() {
    return (
    <>
    <Head>
        <title>Education</title>
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
        <section>
                <h2 className= {educationStyle.h2}>Education</h2>
                <article>
                    <h3 className= {educationStyle.eduTitle}><u> Masters in Data Science | New Jersey Institute of Technology, Newark, NJ, USA</u></h3>
                    <div className= {educationStyle.desc}>
                        <h4> 09/2022 - 05/2024 </h4>
                        
                        <ul>
                            <li>GPA: 3.5 </li>
                            <li> Major: Machine Learning, Big Data, Deep Learning, Applied Statistics, Programming with R.</li>
                            <li> Minor: Corporate Finance, Database Management, Data Mining, Web System Development</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <h3 className= {educationStyle.eduTitle}><u> Bachelor of Computer Engineering | Gujarat Technological University, INDIA </u></h3>
                    <div className= {educationStyle.desc}>
                        <h4>08/2017 - 08/2020 </h4>
                        
                        <ul>
                            <li> GPA: 3.6 </li>
                            <li> Major US Equivalent: Computer Engineering</li>
                            <li> Course Highlights: Web Design, Cyber Security, Java/C/VB Programming, IT Project Management, Database Programming, Python, Artificial Intelligence.</li>
                            <li> Project: Classifications of Human Cell using image processing & python libraries, Rural Area Blood Donation website using HTML, PHP, CSS.</li>
                        </ul>
                    </div>
                </article>

                <article>
                    <h3 className= {educationStyle.eduTitle}><u> Data Analytics Bootcamp Certificate | Rutgers University, New Brunswick, NJ, USA </u></h3>
                    <div className= {educationStyle.desc}>
                        <h4>01/2021 - 07/2021 </h4>

                        <ul>
                            <li> A 24-week intensive program focused on gaining technical programming skills in Excel, VBA, Python, R, JavaScript, Pandas, Matplotlib, Python API, MongoDB, SQL Databases, Tableau, Big Data, Machine Learning, and Deep Learning, Data Analysis.</li>
                            <li> Handle Project and manage the team work, also perform tasks individually.</li>
                        </ul>
                    </div>
                </article>
        </section>

    </main>
    </>
    );
  }