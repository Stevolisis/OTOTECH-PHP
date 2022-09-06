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

export default function Article(){
    const router=useRouter();
    const cancelalert=useRef(true);
    const months=['January','February','March','April','May','June','July',
    'August','September','October','November','December'];
    const {article} =router.query;
    const [liked, setLiked]=useState(false);
    const [content, setContent]=useState([]);
    const [windowLink, setwindowLink]=useState('');

    console.log(months[new Date('2022-09-05T19:23:12.861+00:00').getMonth()])


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })


    function loadContent(){
    axios.get('/api/articles/getArticle')
    .then(res=>{
        let data=res.data.data;
        let status=res.data.status;
        
        if(status==='success'){
            setContent(data);
            console.log(content);
        }else{
            Swal(
                'Error Occured',
                status,
                'warning'
            )
        }
    }).catch(err=>{
        console.log(err);
    })
    }

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
            axios.post('/api/likes/addLike',{page_link:window.location.href})
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
        axios.post('/api/views/addView',{page_link:window.location.href})
        .then(res=>{
            return;
        }).catch(err=>{
            return;
        })
     }



    useEffect(()=>{
    setwindowLink(window.location.href)
    loadContent() 
    checkLike()
    },[])

    useEffect(()=>{
        if(cancelalert.current){
        setTimeout(() => {
            setView();
        }, 2000);
        cancelalert.current=false;
    }
    },[])


    return(
    <>
    <Head>
        <title>article</title>
        <meta name="description" content="Web Technology, app development, content writing, web management, SEO" />
        <link rel="icon" href="/favicon.ico" />
    </Head>






     
     <div className='articleHeadCon'>
        <div className='articleHead'><h1>{content[0] && content[0].title}</h1>
        <p> {content[0] && `Posed on ${months[new Date(content[0].createdAt).getMonth()]} ${new Date(content[0].createdAt).getDay()}, ${new Date(content[0].createdAt).getFullYear()}`}</p>
        {/* <p>{dateNow}</p> */}
        </div>
        <div className="articleImg">
        <div style={{width:'100%',height:'100%',position:'relative'}}>
            <Image 
            src={`/${content[0] && content[0].img_link}`}
            layout="fill"
            objectFit="cover"
            blurDataURL="/favicon.io"
            placeholder="blur"
            priority
            />
        </div>
        </div>

     </div>
     






     <div className="articleCreditCon">


        <div className='articleAuthorCon'>
            <div className='authorImg'>
                <Image
                src={`/${content[0] && content[0].author.img_link}`}
                width={40}
                height={40}
                style={{borderRadius:'50%'}}
                placeholder='blur'
                blurDataURL="/favicon.io"
                />
            </div>

            <div className="articleAuthor">
                <p>AUTHOR</p>
                <p>{content[0] && parse(content[0].author.full_name)}</p>
                <p>{content[0] && parse(content[0].author.description)}</p>
                <p><Link href={`${content[0] && parse(content[0].author.whatsapp.link)}`}>Whatsapp</Link> </p>
                <p><Link href={`${content[0] && parse(content[0].author.github.link)}`}>Github</Link> </p>
                <p><Link href={`${content[0] && parse(content[0].author.linkedin.link)}`}>Linkedin</Link> </p>
                </div>
        </div>


        <div className="articleShareCon">
            <div className="articleShare">
            <RWebShare
            data={{
            text: "Like humans, flamingos make friends for life",
            url: `${windowLink}`,
            title: `${content[0] && content[0].title}`,
            }}
            onClick={() => console.log("shared successfully!")}>
            <button onClick={()=>navigator.share({title:`${content[0] && content[0].title}`,text:'OTOTCH BLOG',url:`${windowLink}}`})}>Share <i className="fa fa-share"/></button>
            </RWebShare>
                <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${windowLink}}i&title=${content[0] && content[0].title}&source=OTOTECH Blog`}><a><i className="fa fa-linkedin"/></a></Link>
                <Link href={`https://twitter.com/intent/tweet?text=${windowLink}}`}><a><i className="fa fa-twitter"/></a></Link>
                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${windowLink}}`}><a><i className="fa fa-facebook"/></a></Link>
            </div>
        </div>


     </div>






     <div className="articleContentCon">
        <div>{content[0] && parse(content[0].content)}</div>
     </div>









     <div className="likeArticleCon">
    <button onClick={()=>{setLiked(!liked),handleLikeBtn()}} style={{background:`${liked==true ? '#9c9a9a' : '#ec9735'}`,
     boxShadow:`${liked==true ? 'none' : '-1px 2px 4px rgba(0, 0, 0, 0.2)'}`}}>
        <i className='fa fa-thumbs-up'></i>
        </button>
     </div>






     <div className='commentBoxCon'>

        <form onSubmit={(e)=>e.preventDefault()}>
            <h3>Leave a Comment</h3>
        <input type='text' name='Full Name' placeholder="Full Name"/>
        <input type='email' name='email' placeholder="E-mail Address"/>
        <textarea placeholder="Your Comment" name='comment'/>
        <button>Submit</button>
        </form>

     </div>


<div className="articleCommentsCon">
<h3>Comments</h3>

<div className='articleAuthorCon' style={{width:'100%'}}>
    <div className='authorImg'>
        <Image
        src='/OTOTECH1.jpg'
        width={40}
        height={40}
        style={{borderRadius:'50%'}}
        placeholder='blur'
        blurDataURL="/favicon.io"
        />
    </div>

    <div className="articleAuthor" >
        <p>STEVEN JOSEPH</p>
        <p>Steven is a Full Stack Developer who has a broad range of experience in creating world class web apps for
             companiess. His an expert in javascript, frameworks like expressJs, Reactjs and NextJs.</p>
    </div>
</div>

<div className='articleAuthorCon' style={{width:'100%'}}>
    <div className='authorImg'>
        <Image
        src='/OTOTECH1.jpg'
        width={40}
        height={40}
        style={{borderRadius:'50%'}}
        placeholder='blur'
        blurDataURL="/favicon.io"
        />
    </div>

    <div className="articleAuthor" >
        <p>STEVEN JOSEPH</p>
        <p>Steven is a Full Stack Developer who has a broad range of experience in creating world class web apps for
             companiess. His an expert in javascript, frameworks like expressJs, Reactjs and NextJs.</p>
    </div>
</div>




</div>

     <SlidingArticles/>

    </>
    )
}