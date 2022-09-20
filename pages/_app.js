import '../styles/globals.css'
import Layout from './Layout'
import '../styles/home.scss'
import '../styles/article.scss'
import '../styles/adminStyles/admindashboard.scss'
import '../styles/adminStyles/adminDataDisplay.scss'
import '../styles/adminStyles/adminDataInput.scss'
import '../styles/adminStyles/adminSupport.scss'
import '../styles/adminStyles/adminComments.scss'
import '../styles/pageLoader.scss'
import 'font-awesome/css/font-awesome.min.css';
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {useRouter,Router} from 'next/router';
import PageLoader from '../components/PageLoader'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }) {
  const router=useRouter()
  const childrenName=router.pathname;
  const admin=childrenName.split('/')[1]; 
  const [loading,setLoading]=useState(false);

useEffect(()=>{
  const handleRouteChange  = (url, { shallow}) => {
    setLoading(true)
  }
  const routeChangeComplete = (url, { shallow}) => {
    setLoading(false)
  }

  Router.events.on("routeChangeStart", handleRouteChange );
  Router.events.on("routeChangeError", routeChangeComplete);
  Router.events.on("routeChangeComplete", routeChangeComplete);

},[])

  return(
    <Layout>{loading&&<PageLoader/>}
       {admin==='admin' ? 
        <>
            <AdminHeader>
                  <Component {...pageProps} key={router.asPath}/>        
            </AdminHeader> 
        <Footer/>
        </>
        :
         <>
         
         <Header/>
               <Component {...pageProps} key={router.asPath}/>
         <Footer/>
         </>
         }
    </Layout>
  )
}

export default MyApp
