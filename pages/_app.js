import '../styles/globals.css'
import Layout from './Layout'
import '../styles/home.scss'
import '../styles/article.scss'
import 'font-awesome/css/font-awesome.min.css';

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
