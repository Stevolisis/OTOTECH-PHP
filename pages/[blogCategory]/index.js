import Head from "next/head";
import Link from "next/link";
import {useRouter} from 'next/router'
import { useEffect,useRef,useState } from "react";
import BlogList from "../../components/BlogList";
import SlidingArticles from "../../components/SlidingArticles";
import styles from '../../styles/blogCategory.module.css'
import $ from 'jquery';
import Mainscreen from "../../components/Mainscreen";
import axios from "axios";
import Swal from "sweetalert2";




export const getServerSideProps=async (context)=>{
  let error=context.query;
  try{
    const res=await axios.get(`http://localhost:3000/api/categories/getCategoryByName?category=${context.params.blogCategory}`);
    const res2=await axios.get(`http://localhost:3000/api/articles/loadArticlesByCategory?category=${context.params.blogCategory}&limit=1`);
    const category= res.data.data;
    const blogData= res2.data.data;
    
    return {
      props:{category,blogData}
    }    
    
  }catch(err){
    return {
      props:{error:error}
    } 
  }
  
}

  
export default function BlogCategory({category,blogData,error}){
  let router=useRouter();
    const [articlesSlide,setarticlesSlide]=useState([]);
    const [categories,setcategories]=useState([]);
    const [articles,setarticles]=useState([]);
    let limit=useRef(1);

    if(error){
      Swal.fire(
        'Error at ServerSideProps',
        error,
        'warning'
      )
}

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
      

        function loadArticlesByCategory(){
          console.log('momo',router.query.blogCategory)
          axios.get(`/api/articles/loadArticlesByCategory?category=${router.query.blogCategory}&limit=${limit.current}`)
          .then(res=>{
              let status=res.data.status;
              let data=res.data.data;
              console.log(data)
              if(status==='success'){
                  setarticles(data)
              }else{
                  Swal.fire(
                      'Error Soil',
                      res.data.status,
                      'warning'
                  )
              }
          }).catch(err=>{
              Swal.fire(
                  'Error Soil2',
                  'Error Occured at Axios',
                  'warning'
              )           
          });            
  
        }


        
  function loadCategories(){
    axios.get('/api/categories/getCategories')
    .then(res=>{
        let status=res.data.status;
        let data=res.data.data;
        if(status==='success'){
            setcategories(data)
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


// function loadCategory(){
//   axios.get('/api/categories/getCategoryBySlug')
//   .then(res=>{
//       let status=res.data.status;
//       let data=res.data.data;
//       if(status==='success'){
//           setcategory(data)
//       }else{
//           Swal.fire(
//               'Error',
//               res.data.status,
//               'warning'
//           )
//       }
//   }).catch(err=>{
//       Swal.fire(
//           'Error',
//           'Error Occured at Axios',
//           'warning'
//       )           
//   });
// }

        function loadMore(){
          limit.current=limit.current+1;
          loadArticlesByCategory();
        }

        useEffect(()=>{
          dropdown1();  
        })

        useEffect(()=>{
          setarticles(blogData);
          loadCategories();
          loadArticlesByViews();
        },[])

    



    return(
        <>
      <Head>
        <title>OTOTECH blogCategory</title>
        <meta name="description" content="Web Technology, app development, content writing, web management, SEO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>







      <Mainscreen heading={category&&category.name} description={category&&category.description}
     imgLink={category && category.img && category.img.url} page='blogCategory'/>





<div className={styles.categorySliderCon}>
<div className={styles.categorySlider}>
  {
    categories && categories.map((category,i)=>{
return <Link href={category.slug&&category.slug} key={i}><a className={styles.categorySlide}><i className={`fa fa-${category.icon}`}/>{category.name}</a></Link>
    })
  }
  </div>
</div>










     <div className='categoriesCon3'>
      
      <BlogList articles={articles}/>


      <div className='blogNavCon'>
        <div className='blogNav'>
        {articles&&<button onClick={loadMore}>Load More</button>}
        </div>
      </div>
      </div>


        <SlidingArticles articlesSlide={articlesSlide} title='Most Read Articles'/>
        </>
    )
}