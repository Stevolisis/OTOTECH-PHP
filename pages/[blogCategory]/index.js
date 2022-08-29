import Head from "next/head";
import Link from "next/link";
import {useRouter} from 'next/router'
import { useEffect } from "react";
import BlogList from "../../components/BlogList";
import SlidingArticles from "../../components/SlidingArticles";
import styles from '../../styles/blogCategory.module.css'
import $ from 'jquery';
import Mainscreen from "../../components/Mainscreen";

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







      <Mainscreen heading={blogCategory} description='The Ototech Blog is the top hub for developers, designers,
     finance experts, executives, and entrepreneurs,
     featuring key technology updates, tutorials, freelancer resources, and management insights.'
     imgLink='/OTOTECH2.jpg'/>





<div className={styles.categorySliderCon}>
<div className={styles.categorySlider}>
<Link href='/engineering'><a className={styles.categorySlide}>Engineering</a></Link>
<Link href='/graphics'><a className={styles.categorySlide}>Graphics</a></Link>
<Link href='/web-development'><a className={styles.categorySlide}>Web Development</a></Link>
<Link href='/ui-ux'><a className={styles.categorySlide}>UI/UX Design</a></Link>
<Link href='/app-development'><a className={styles.categorySlide}>App Development</a></Link>
<Link href='/content-writing'><a className={styles.categorySlide}>Content Writing</a></Link>
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