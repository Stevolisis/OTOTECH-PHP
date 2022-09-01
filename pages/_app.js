import '../styles/globals.css'
import Layout from './Layout'
import '../styles/home.scss'
import '../styles/article.scss'
import '../styles/adminStyles/admindashboard.scss'
import '../styles/adminStyles/adminDataDisplay.scss'
import '../styles/adminStyles/adminDataInput.scss'
import '../styles/adminStyles/adminSupport.scss'
import 'font-awesome/css/font-awesome.min.css';
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {useRouter} from 'next/router';


function MyApp({ Component, pageProps }) {
  const router=useRouter()
  const childrenName=router.pathname;
  const admin=childrenName.split('/')[1]; 

  return(
    <Layout>
       {admin==='admin' ? 
        <>
            <AdminHeader>
                  <Component {...pageProps} />        
            </AdminHeader> 
        <Footer/>
        </>
        :
         <>
         <Header/>
               <Component {...pageProps} />
         <Footer/>
         </>
         }
    </Layout>
  )
}

export default MyApp
