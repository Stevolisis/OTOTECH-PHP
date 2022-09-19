import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router'
import { useEffect,useRef,useState } from "react";
import Swal from "sweetalert2";
import SlidingArticles from "../../../components/SlidingArticles";
import parse from 'html-react-parser';
import { RWebShare } from "react-web-share";





export const getServerSideProps=async (context)=>{
    let error=context.query;
    try{
      const res=await axios.get(`http://localhost:3000/api/articles/getArticle?category=${context.params.blogCategory}&article=${context.params.article}`);
      const content= res.data.data[0];
      const pageId=content._id;
      const categoryId=content.category;
      const img_link=content.img.url;
      const img_link2=content.author.img.url;
      const whatsapp=content.author.whatsapp;
      const dribble=content.author.dribble;
      const github=content.author.github;
      const linkedin=content.author.linkedin;
      const twitter=content.author.twitter;
      const instagram=content.author.instagram;
      
      return {
        props:{content,pageId,categoryId,img_link,img_link2,whatsapp,dribble,github,linkedin,twitter,instagram}
      }    
      
    }catch(err){
      return {
        props:{error:err.message}
      } 
    }
    
  }




export default function Article({error,content,pageId,categoryId,img_link,img_link2,whatsapp,dribble,github,linkedin,twitter,instagram}){
    if(error){
        Swal.fire(
          'Error at ServerSideProps',
          error,
          'warning'
        )
  }
  console.log('laaaaaaaa',error)
    const months=['January','February','March','April','May','June','July',
    'August','September','October','November','December'];
    const [articlesSlide,setarticlesSlide]=useState([]);
    const [liked, setLiked]=useState(false);
    const [windowLink, setwindowLink]=useState('');
    const [email, setemail]=useState('');
    const [full_name, setfull_name]=useState('');
    const [comments, setcomments]=useState(''); 


    console.log(months[new Date('2022-09-05T19:23:12.861+00:00').getMonth()])
// alert(categoryId)

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })


    // function loadContent(){
    // axios.get('/api/articles/getArticle')
    // .then(res=>{
    //     let data=res.data.data[0];
    //     let status=res.data.status;

    //     if(status==='success'){
    //         setContent(data);
    //         setpageId(data._id);
    //         setcategoryId(data.category);
    //         setimg_link(data.img.url)
    //         setimg_link2(data.author.img.url)
    //         setwhatsapp(data.author.whatsapp)
    //         setdribble(data.author.dribble)
    //         setgithub(data.author.github)
    //         setlinkedin(data.author.linkedin)
    //         settwitter(data.author.twitter)
    //         setinstagram(data.author.instagram);
    //     }else{
    //         Swal(
    //             'Error Occured',
    //             status,
    //             'warning'
    //         )
    //     }
    // }).catch(err=>{
    //     console.log(err);
    // })
    // }

    function checkLike(){
        let checkTracker=localStorage.getItem('likeTracker');

        if(checkTracker){

        let likeTracker =JSON.parse(localStorage.getItem('likeTracker'));
        if(likeTracker.includes(window.location.href)){
            setLiked(true)
        }else{
        setLiked(false)                         
        } 

        }else{
            return;
        }
          
    }

    function handleLikeBtn(){
        console.log(window.location.href);
        if(liked===false){
            axios.post('/api/likes/addLike',{page_link:window.location.href,pageId:pageId})
            .then(res=>{
                let status=res.data.status;
            

                if(status==='success'){
                if (typeof window !== 'undefined') {
                    let item = localStorage.getItem('likeTracker');
                    console.log(item)


                if(item){
                    let likeTracker =JSON.parse(localStorage.getItem('likeTracker'));

                    if(likeTracker.includes(window.location.href)){
                        return;
                    }else{
                    likeTracker.push(`${window.location.href}`);
                    localStorage.setItem('likeTracker',JSON.stringify(likeTracker));                          
                    }
                    
                    Toast.fire({
                    icon: 'success',
                    title: `You like this page on ${item}`
                    });

                }else{
                    localStorage.setItem('likeTracker',JSON.stringify([]));
                    let likeTracker =JSON.parse(localStorage.getItem('likeTracker'));
                    likeTracker.push(`${window.location.href}`);
                    localStorage.setItem('likeTracker',JSON.stringify(likeTracker));

                    Toast.fire({
                    icon: 'success',
                    title: `You like this page on ${item}`
                });                
                    }



                    
                }




                }else{
                    Toast.fire({
                        icon: 'error',
                        title: 'You Unlike this page'
                    })
                }
            }).catch(err=>{
                console.log(err)
                Toast.fire({
                    icon: 'warning',
                    title: 'Error Occured'
                })
            })
        }else{
            let likeTracker =JSON.parse(localStorage.getItem('likeTracker'));
            let indexTracker=likeTracker.indexOf(window.location.href);
            likeTracker.splice(indexTracker,indexTracker+1);
            localStorage.setItem('likeTracker',JSON.stringify(likeTracker));  
            
            console.log(indexTracker)
        }
    }


     function setView(){
        if(pageId===''){
            return;
        }else{
            axios.post('/api/views/addView',{page_link:window.location.href,pageId:content && pageId})
        .then(res=>{
            return;
        }).catch(err=>{
            return;
        })
        }
     }

     function setComment(e){
        e.preventDefault();
        const formData=new FormData(e.target);
        formData.append('page_link',window.location.href);
        formData.append('pageId',pageId);

        axios.post('/api/comments/addComment',formData)
        .then(res=>{
            let status=res.data.status;
            let data=res.data.data;
            if(status==='success') alert(status)
            loadComments();
            userAuth();
            console.log(data,status)
           
        }).catch(err=>{
            console.log(err)
            
        })
     }



     function loadComments(){
       if(pageId===''){
       return;
       }else{
        axios.get(`/api/comments/getPageComments?pageId=${pageId}`)
        .then(res=>{
            let data=res.data.data;
            let status=res.data.status;
    
            if(status==='success'){
                setcomments(data);
            }else{
                console.log('commentsSec',data);
            }
        }).catch(err=>{
            console.log('commentsErr',err);
        })
       }
    }





    function userAuth(){
         axios.get('/api/users/userAuth')
         .then(res=>{
             let data=res.data.data;
             let status=res.data.status;
             if(status==='success'){
                setfull_name(data.full_name);
                setemail(data.email);
            }else{
                console.log('commentsSec',data);
            }

         }).catch(err=>{
             console.log('commentsErr',err);
         })
     }


     function loadArticlesByCategory(){
        if(pageId===''){
            return;
        }else{
        axios.get(`/api/articles/loadRelatedArticlesByCategory?id=${categoryId}`)
        .then(res=>{
            let status=res.data.status;
            let data=res.data.data;
            if(status==='success'){
                setarticlesSlide(data)
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

      }

    useEffect(()=>{
    setwindowLink(window.location.href)
    checkLike()
    userAuth();
    loadComments()
    setView();
    loadArticlesByCategory(); 
   },[])

    useEffect(()=>{

    },[pageId])



    return(
    <>
    <Head>
        <title>article</title>
        <meta name="description" content="Web Technology, app development, content writing, web management, SEO" />
        <link rel="icon" href="/favicon.ico" />
    </Head>






     
     <div className='articleHeadCon'>
        <div className='articleHead'><h1>{content && content.title}</h1>
        <p> {content && `Posed on ${months[content.month]} ${content.day}, ${content.year}`}</p>
        </div>
        <div className="articleImg">
        <div style={{width:'100%',height:'100%',position:'relative'}}>
           {img_link && 
            <Image 
            src={img_link}
            alt='Cover Image'
            layout="fill"
            quality={85}
            // objectFit="fill"
            blurDataURL="/favicon.io"
            placeholder="blur"
            priority
            />}
        </div>
        </div>

     </div>
     






     <div className="articleCreditCon">


        <div className='articleAuthorCon'>
            <div className='authorImg'>
               {img_link2 && <Image
                src={img_link2}
                width={40}
                height={40}
                style={{borderRadius:'50%'}}
                placeholder='blur'
                blurDataURL="/imageLoader.png"
                priority
                />}
            </div>

            <div className="articleAuthor">
                <p>AUTHOR</p>
                <p>{content && content.author.full_name}</p>
                <p>{content && content.author.description}</p>
            <div className="authorSocialLinks">
            {whatsapp&&whatsapp.status==='inactive'|| ''? '' :<Link href={`${whatsapp&&whatsapp.link}`}><a><i className='fa fa-whatsapp'/></a></Link>}
            {dribble&&dribble.status==='inactive'|| ''? '' :<Link href={`${dribble&&dribble.link}`}><a><i className='fa fa-dribble'/></a></Link>}
            {github&&github.status==='inactive'|| ''? '' :<Link href={`${github&&github.link}`}><a><i className='fa fa-github'/></a></Link>}
            {linkedin&&linkedin.status==='inactive'|| ''? '' :<Link href={`${linkedin&&linkedin.link}`}><a><i className='fa fa-linkedin'/></a></Link>}
            {twitter&&twitter.status==='inactive'|| ''? '' :<Link href={`${twitter&&twitter.link}`}><a><i className='fa fa-twitter'/></a></Link>}
            {instagram&&instagram.status==='inactive'|| ''? '' :<Link href={`${instagram&&instagram.link}`}><a><i className='fa fa-instagram'/></a></Link>}
            </div>
               </div>
        </div>


        <div className="articleShareCon">
            <div className="articleShare">
            <RWebShare
            data={{
            text: "Like humans, flamingos make friends for life",
            url: `${windowLink}`,
            title: `${content && content.title}`,
            }}
            onClick={() => console.log("shared successfully!")}>
            <button onClick={()=>navigator.share({title:`${content && content.title}`,text:'OTOTCH BLOG',url:`${windowLink}}`})}>Share <i className="fa fa-share"/></button>
            </RWebShare>
                <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${windowLink}}i&title=${content && content.title}&source=OTOTECH Blog`}><a><i className="fa fa-linkedin"/></a></Link>
                <Link href={`https://twitter.com/intent/tweet?text=${windowLink}}`}><a><i className="fa fa-twitter"/></a></Link>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${windowLink}}`}><a><i className="fa fa-facebook"/></a></Link>
            </div>
        </div>


     </div>






     <div className="articleContentCon">
        <div >{content && parse(content.content)}</div>
     </div>









     <div className="likeArticleCon">
    <button onClick={()=>{setLiked(!liked),handleLikeBtn()}} style={{background:`${liked==true ? '#9c9a9a' : '#ec9735'}`,
     boxShadow:`${liked==true ? 'none' : '-1px 2px 4px rgba(0, 0, 0, 0.2)'}`}}>
        <i className='fa fa-thumbs-up'></i>
        </button>
     </div>






     <div className='commentBoxCon'>

        <form onSubmit={setComment}>
            <h3>Leave a Comment</h3>
        <input type='text' name='full_name' placeholder="Full Name" value={full_name} onChange={(e)=>setfull_name(e.target.value)}/>
        <input type='email' name='email' placeholder="E-mail Address" value={email} onChange={(e)=>setemail(e.target.value)}/>
        <textarea placeholder="Your Comment" name='comment'/>
        <button>Submit</button>
        </form>

     </div>


<div className="articleCommentsCon">
<h3>Comments</h3>

{comments && 
    comments.map((comment,i)=>{
        return(
        <div className='articleAuthorCon' style={{width:'100%'}} key={i}>
        <div className='authorImg'>
        <Image
        src='/user.png'
        width={40}
        height={40}
        style={{borderRadius:'50%'}}
        placeholder='blur'
        blurDataURL="/favicon.io"
        />
        </div>

        <div className="articleAuthor" >
        <p>{comment.user.full_name} ({`${comment.day}/${comment.month}/${comment.year}`})</p>
        <p>{comment.comment}</p>
        </div>
        </div>
        )
    })
}

</div>

     <SlidingArticles articlesSlide={articlesSlide} title='Related Topics'/>

    </>
    )
}