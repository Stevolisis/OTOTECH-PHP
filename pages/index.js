import Head from 'next/head'
import Link from 'next/link'
import $ from 'jquery';
import { useEffect, useRef, useState } from 'react'
import SlidingArticles from '../components/SlidingArticles';
import BlogList from '../components/BlogList';
import Mainscreen from '../components/Mainscreen';
import axios from 'axios';
import CategoryList from '../components/CategoryList';
import Swal from 'sweetalert2';


export const getServerSideProps=async (context)=>{
let error;
try{
  const res=await axios.get('https://main--reliable-tapioca-719734.netlify.app/api/categories/getCategories');
  const res3=await axios.get('https://main--reliable-tapioca-719734.netlify.app/api/articles/getArticles?limit=1');
  const categories= res.data.data;
  const blogData= res3.data.data;
  error=error&&error;
  
  return {
    props:{categories,blogData}
  }    
  
}catch(err){
  return {
    props:{error:err.message}
  } 
}

}

export default function Home({categories,blogData,error}) {
  const [articlesSlide,setarticlesSlide]=useState([])
  if(error){
    Swal.fire(
      'Error at ServerSideProps',
      error,
      'warning'
    )
  }
  const [articles,setarticles]=useState([])
  let limit=useRef(1)
  console.log(blogData)
  

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


//   function loadCategories(){
//     axios.get('/api/categories/getCategories')
//     .then(res=>{
//         let status=res.data.status;
//         let data=res.data.data;
//         if(status==='success'){
//             setcategories(data)
//         }else{
//             Swal.fire(
//                 'Error',
//                 res.data.status,
//                 'warning'
//             )
//         }
//     }).catch(err=>{
//         Swal.fire(
//             'Error',
//             'Error Occured at Axios',
//             'warning'
//         )           
//     });
// }


function loadArticles(){
  axios.get(`/api/articles/getArticles?limit=${limit.current}`)
  .then(res=>{
      let status=res.data.status;
      let data=res.data.data;
      if(status==='success'){
          setarticles(data)
      }else{
          Swal.fire(
              'Error',
              res.data.status,
              'warning'
          )
      }
  }).catch(err=>{
      Swal.fire(
          'Error',
          'Error Occured at Axios',
          'warning'
      )           
  });
}




function loadArticlesByViews(){
  axios.get('/api/articles/getArticlesByViews')
  .then(res=>{
      let status=res.data.status;
      let data=res.data.data;
      if(status==='success'){
          setarticlesSlide(data)
      }else{
          Swal.fire(
              'Error',
              res.data.status,
              'warning'
          )
      }
  }).catch(err=>{
      Swal.fire(
          'Error',
          'Error Occured at Axios',
          'warning'
      )           
  });
}


  function loadMore(){
    limit.current=limit.current+1;
    loadArticles()
  }

  useEffect(()=>{
    dropdown1();  
  })

useEffect(()=>{
  setarticles(blogData);
  loadArticlesByViews();
},[])

  return (
    <>
      <Head>
        <title>OTOTECH BLOG</title>
        <meta name="description" content="Web Technology, app development, content writing, web management, SEO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


    <Mainscreen heading='OTOTECH BLOG' description='The Ototech Blog is the top hub for developers, designers,
     finance experts, executives, and entrepreneurs,
     featuring key technology updates, tutorials, freelancer resources, and management insights.'
     imgLink='/OTOTECH2.jpg' page='home'/>






<CategoryList categories={categories}/>







      <div className='emailRegisterCon'>
        <div className='emailRegister'>
          <h2>World-class articles, delivered weekly.</h2>
          <form>
            <input type='email' placeholder='Enter your email'/>  
            <button>Submit</button>
          </form>
        </div>
      </div>















      <div className='categoriesCon3'>
      



      <BlogList articles={articles}/>




      <div className='blogNavCon'>
        <div className='blogNav'>
        <button onClick={loadMore}>Load More</button>
        </div>
      </div>
      </div>









      <div className='blogAdsCon'>
    <div className='blogAdsInfo'>
      <h2>IN NEED OF A WEBSITE, MOBILE APP, COPY WRITING SERVICES e.t.c ?<br/>
      VISIT US HERE TO GET A WORLD CLASS SERVICE</h2>
      <Link href='#'>OUR SERVICES</Link>
    </div>
    <div className='blogAdsImg'>
      <picture><img src='/OTOTECH3.png' alt='blog Ads'/></picture>
    </div>
  </div>


<SlidingArticles articlesSlide={articlesSlide} title='Most Read Articles'/>









    </>
  )
}
