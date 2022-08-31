// import { useLayoutEffect, useState } from "react";
// import AdminHeader from "../components/AdminHeader";
// import Footer from "../components/Footer";
// import Header from "../components/Header";

export default function Layout({children}){
    // const [admin,setAdmin]=useState('');

    // useLayoutEffect(()=>{
    // const childrenName=window.location.href;
    // setAdmin(childrenName.split('/')[3]);  
    // })

    return(
        <>
        {/* {admin==='admin' ? 
        <>
            <AdminHeader>
            {children}        
            </AdminHeader> 
        <Footer/>
        </>
        :
         <>
         <Header/>
         {children}
         <Footer/>
         </>
         } */}
         {children}

        </>
    )
}