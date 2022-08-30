import { useLayoutEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({children}){
    const [admin,setAdmin]=useState('');

    useLayoutEffect(()=>{
    const childrenName=children.type.name;
    setAdmin(childrenName.split('n')[0]);  
    console.log(children);     
    console.log(childrenName.split('n')[0]);     
    })

    return(
        <>
        {admin==='Admi' ? 
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
         }

        </>
    )
}