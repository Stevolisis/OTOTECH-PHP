import Head from "next/head";
import Link from "next/link";
import {useRouter} from 'next/router'
import { useEffect } from "react";

export default function Article(){
    const router=useRouter();
    const {article} =router.query;


    useEffect(()=>{
    const link=window.location.href;
    const category=link.split('/')[3];   
    //alert(category)     
    })


    return(
    <>
    <Head>
        <title>OTOTECH {article}</title>
        <meta name="description" content="Web Technology, app development, content writing, web management, SEO" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

jko


    </>
    )
}