import Link from "next/link";
import {useRouter} from 'next/router'
import { useEffect } from "react";

export default function Article(){
    const router=useRouter();


    useEffect(()=>{
    const link=window.location.href;
    const category=link.split('/')[3];   
    //alert(category)     
    })
    return(
        <>Blog Topic 1 <Link href={`${window.location.href}/3`}>Page 3</Link></>
    )
}