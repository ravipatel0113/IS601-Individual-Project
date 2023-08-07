import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import mainStyles from '../../styles/main.module.css';
import Script from 'next/script';

export default function ProjectPost() {
    return (
    <>
    <Head>
        <title>Project</title>
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
        <h1 className= {mainStyles.h1_project}>My Project</h1>

        <section>
            <div className= {mainStyles.githublink}>
                GitHub Link:
                <Link href= 'https://github.com/ravipatel0113/Classification_of_Human_Cells.git'>
                    Classification Of Human Cells
                </Link>
            </div>
            <div className= {mainStyles.bio}>
                <p className= {mainStyles.p}> 
                    Classification Of Human Cells done through Image Processing. 
                    A system that predicts the cells based on its structure and image used for testing.
                    Using Python Tensorflow Library Epoch method to train the system. 
                    Convert the black & white image into an RBG pattern.
                    28 different libraries were enforced to store the image and train the system.
                </p>
            </div>
            <div className= {mainStyles.cellImage}>
                <Image
                    className= {mainStyles.projectImage}
                    src= '/images/human_classification_cells.png'
                    width = {500}
                    height = {500} 
                />
                <Image
                    className= {mainStyles.projectImage}
                    src= '/images/human_classification_cells_graph.png'
                    width = {500}
                    height = {500} 
                />
                <Image
                    className= {mainStyles.projectImage}
                    src= '/images/human_classification_cells_prediction.png'
                    width = {500}
                    height = {500} 
                />
            </div>
        </section>
        <section>
            <div className= {mainStyles.githublink}>
                GitHub Link:
                <Link href= 'https://github.com/ravipatel0113/Project-1_Greener-Pastures.git'>
                    Greener Pastures
                </Link>
            </div>
            <div className= {mainStyles.bio}>
                <p className= {mainStyles.p}> 
                    Greener Pastures is a project that was developed in order to find the best sutiable state to live in to land a preferred job in the Job Market.
                    Also the HeatMap shows the number of COVID cases during the month.
                    We used Google API Key and all the raw data we ca nget on the jobs and the COVID cases to put other the project.  
                </p>
            </div>
            <section>
            <div className= {mainStyles.marketImage}>
                <Image
                    className= {mainStyles.projectImage}
                    src= '/images/heatmap_01_Feb_2020.png'
                    width = {984}
                    height = {385} 
                />
                <Image
                    className= {mainStyles.projectImage}
                    src= '/images/Market_job_status.png'
                    width = {865}
                    height = {382} 
                />
                <Image
                    className= {mainStyles.projectImage}
                    src= '/images/Average_cost_of_living_vs_City.png'
                    width = {984}
                    height = {408} 
                />
            </div>
            </section>
        </section>
        <section>
            <div className= {mainStyles.githublink}>
                GitHub Link:
                <Link href= 'https://github.com/ravipatel0113/Stock_Prediction_Project_with_Machine_Learning.git'>
                    Stock Prediction
                </Link>
            </div>
            <div className= {mainStyles.bio}>
                <p className= {mainStyles.p}> 
                    Stock Prediction project was our attempt at importing important information concerning the S&P 500 and using that information to assist anyone looking to learn mora about the current and possibly future status of stock prices.
                    The home page is meant to be a comfortable place for our end users as they look at both stock specific charts and also charts that present information concerning the entire S&P 500.
                    Our drop down menu allows for a closer look at all chart we use in the home page.
                    The Tree Map shows the entire S&P 500. Green means an increase in price over the last 6 months and red shows a decrease. The larger the change the larger the squares.
                    The Word Map allows a quick view into the news connected with the stock you wish to choose. Once the Word Map is up click an interesting word and you will find articles popping up below the Word Map.
                </p>
            </div>
            <div className= {mainStyles.marketImage}>
                <Image
                    className= {mainStyles.projectImage}
                    src= '/images/treemap.jpg'
                    width = {987}
                    height = {598} 
                />
                <Image
                    className= {mainStyles.projectImage}
                    src= '/images/GS_predictor.png'
                    width = {940}
                    height = {450} 
                />
                <Image
                    className= {mainStyles.projectImage}
                    src= '/images/GS_candlestick.png'
                    width = {940}
                    height = {450} 
                />
            </div>
        </section>
    </main>
    
    </>
    );
  }