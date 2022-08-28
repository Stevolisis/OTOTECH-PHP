import Head from "next/head";
import Link from "next/link";
import {useRouter} from 'next/router'
import { useEffect } from "react";
import BlogList from "../../components/BlogList";
import SlidingArticles from "../../components/SlidingArticles";
import '../../styles/blogCategory.module.css'
import $ from 'jquery';

export default function BlogCategory(){
    const router=useRouter();
    const {blogCategory} =router.query;


    function dropdown1(){
        $('.filterSearch1').on('focus',function(){
          $('.main4').css('display','block')
        });
        $('.filterSearch1').on('focusout',function(){
          $(document).on('click',function(e){
            if(e.target.className=='main4'||e.target.className=='filterSearch1'){
              return
            }else{
              $('.main4').css('display','none')
            }
          })
        });
        }
      
      
        useEffect(()=>{
          dropdown1();  
        })
      

    
    return(
        <>
              <Head>
        <title>OTOTECH {blogCategory}</title>
        <meta name="description" content="Web Technology, app development, content writing, web management, SEO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>









      <div className="mainScreenCon">
      <div className="mainScreen">
      <div className="main1"><h3>Web Development</h3></div>
      <div className="main2"> <p>
      The Ototch Blog is the top hub for developers, designers, finance experts, executives, and entrepreneurs, featuring key technology updates, tutorials, freelancer resources, and management insights.
      </p></div>

      </div>

      <div className="submain">
      <div className="main3">
      <i className="fa fa-search"></i>
      <input className='filterSearch1' type="text" name="search" placeholder="Search category, blogs, products ..."/>
      </div>
      <div className="main4">
      <div><Link href='/op'>Blog 1</Link></div>
      <div><Link href='#'>Blog 2</Link></div>
      <div><Link href='#'>Blog 3</Link></div>
      <div><Link href='#'>Blog 7</Link></div>			
      </div>
      </div>
      </div>













     <div className='categoriesCon3'>
      

      <BlogList/>


      <div className='blogNavCon'>
        <div className='blogNav'>
        <Link href='#'>Previous</Link>
        <Link href='#'>Next</Link>
        <Link href='#'>1</Link>
        <Link href='#'>2</Link>
        <Link href='#'>3</Link>
        <Link href='#'>4</Link>
        <Link href='#'>5.....</Link>
        <Link href='#'>20</Link>
        </div>
      </div>
      </div>


        <SlidingArticles/>
        </>
    )
}