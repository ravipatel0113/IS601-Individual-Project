import '../styles/global.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Layout from '../components/layout';
import TagManager from "react-gtm-module";
import React, {useEffect} from "react";

const g_id = process.env.G_ID_KEY;

const tagManagerArgs = {
  gtmId: g_id,
}
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (<Layout>
    <Component {...pageProps} />
    </Layout>);
}

export default MyApp