import Head from "next/head";
import Link from "next/link";
import {useRouter} from 'next/router'
import { useEffect,useState } from "react";
import SlidingArticles from "../../../components/SlidingArticles";

export default function Article(){
    const router=useRouter();
    const {article} =router.query;
    const [liked, setLiked]=useState(false);


    useEffect(()=>{
    const link=window.location.href;
    const category=link.split('/')[3];   
    //alert(category)     
    })


    return(
    <>
    <Head>
        <title>{article}</title>
        <meta name="description" content="Web Technology, app development, content writing, web management, SEO" />
        <link rel="icon" href="/favicon.ico" />
    </Head>






     
     <div className='articleHeadCon'>
        <div className='articleHead'><h1>Introduction to Frontend Development</h1>
        <p>Posed on August 29, 2022.</p>
        </div>
        <div className="articleImg"></div>

     </div>
     






     <div className="articleCreditCon">


        <div className='articleAuthorCon'>
            <div className='authorImg'>
                <img src="/OTOTECH1.jpg"/>
            </div>

            <div className="articleAuthor">
                <p>AUTHOR</p>
                <p>STEVEN JOSEPH</p>
                <p>Steven is a Full Stack Developer who has a broad range of experience in creating world class web apps for
                     companiess. His an expert in javascript, frameworks like expressJs, Reactjs and NextJs.</p>
            </div>
        </div>


        <div className="articleShareCon">
            <div className="articleShare">
                <button>Share <i className="fa fa-share"/></button>
                <Link href='#'><a><i className="fa fa-linkedin"/></a></Link>
                <Link href='#'><a><i className="fa fa-twitter"/></a></Link>
                <Link href='#'><a><i className="fa fa-github"/></a></Link>
                <Link href='#'><a><i className="fa fa-facebook"/></a></Link>
            </div>
        </div>


     </div>






     <div className="articleContentCon">
        <p>
        Reprehenderit pretium ultrices taciti, aspernatur ullamco, pretium etiam consectetur, ea labore aut sollicitudin facilis ligula ornare etiam odio. Justo cumque ratione, porro sociis dolore! Fugiat duis, laoreet, esse urna laoreet diam per, dicta nec. Laborum, sequi volutpat cumque urna cupiditate, duis sollicitudin voluptas nibh voluptatibus? Adipiscing dapibus urna, beatae ullam conubia vulputate placeat molestie excepteur cillum mus torquent vero odio? Enim habitasse vitae? Maxime, sapiente integer posuere volutpat, harum risus? A felis, sint odio conubia. Adipiscing doloribus sit quo etiam. Parturient! Parturient assumenda ut, porta quisquam arcu alias assumenda, voluptas? Aenean labore cras porro facilisis, eius placerat quis primis ante.
Litora pariatur, anim integer. Facere fugit proin sagittis curabitur torquent beatae, eget tenetur adipisci. Egestas, eget eum, fringilla augue, montes ultricies cupiditate. Curae inventore, venenatis, massa officiis. Laboris mauris elementum turpis nonummy montes hac condimentum odio mattis ridiculus aliquip nostrum reiciendis mollitia! Expedita purus, debitis. Egestas! Qui nostrud? Consectetuer iusto unde, labore porro consectetur ornare volutpat, aliqua porta cras cubilia. Accumsan incidunt, omnis dolorum dignissimos! Aliquet mauris quam omnis tempor, pulvinar proident explicabo sociosqu corporis do quisquam mauris voluptate incidunt, viverra senectus commodi orci beatae cupidatat ad, provident, deserunt occaecati, quaerat dui, cumque pellentesque
 adipiscing! Perferendis mollit risus, elementum, habitasse.
Inceptos tempore, sapiente porta! Exercitation cras minima cubilia sit eius scelerisque iusto, 
nibh dicta imperdiet montes eaque, sit molestias turpis turpis placerat. Pede hymenaeos 
consectetur temporibus impedit? Totam, vero, elementum? Suspendisse hic! Tenetur commodi nisl
 dolores magna temporibus urna, placeat gravida nascetur volutpat blandit recusandae ad assumenda
  pede? Optio quidem repudiandae sapien ad et, vestibulum! Molestias veritatis. Massa quae 
  dignissimos condimentum blandit repellendus, elementum, placeat laboriosam maecenas? Fringilla,
   quam. Nihil reiciendis sapien adipisicing molestias euismod harum, scelerisque? Convallis
    vulputate dapibus nullam ligula, expedita fusce metus morbi vestibulum minus consectetur
     montes, vivamus! Voluptates? Potenti, hymenaeos? Explicabo, earum eos saepe malesuada? Aperiam.
Reprehenderit pretium ultrices taciti, aspernatur ullamco, pretium etiam consectetur,
 ea labore aut sollicitudin facilis ligula ornare etiam odio. Justo cumque ratione, porro
  sociis dolore! Fugiat duis, laoreet, esse urna laoreet diam per, dicta nec. Laborum, sequi
   volutpat cumque urna cupiditate, duis sollicitudin voluptas nibh voluptatibus? Adipiscing
    dapibus urna, beatae ullam conubia vulputate placeat molestie excepteur cillum mus torquent
     vero odio? Enim habitasse vitae? Maxime, sapiente integer posuere volutpat, harum risus?
      A felis, sint odio conubia. Adipiscing doloribus sit quo etiam. Parturient! Parturient
       assumenda ut, porta quisquam arcu alias assumenda, voluptas? Aenean labore cras porro 
            voluptatibus? Adipiscing dapibus urna, beatae ullam conubia vulputate placeat
             molestie excepteur cillum mus torquent vero odio? Enim habitasse vitae? Maxime,
              sapiente integer posuere volutpat, harum risus? A felis, sint odio conubia.
               Adipiscing doloribus sit quo etiam. Parturient! Parturient assumenda ut, porta 
               quisquam arcu alias assumenda, voluptas? Aenean labore cras porro facilisis,
                eius placerat quis primis ante.
Litora pariatur, anim integer. Facere fugit proin sagittis curabitur torquent beatae, eget 
tenetur adipisci. Egestas, eget eum, fringilla augue, montes ultricies cupiditate. Curae 
inventore, venenatis, massa officiis. Laboris mauris elementum turpis nonummy montes hac
 condimentum odio mattis ridiculus aliquip nostrum reiciendis mollitia! Expedita purus, debitis.
  Egestas! Qui nostrud? Consectetuer iusto unde, labore porro consectetur ornare volutpat, 
  aliqua porta cras cubilia. Accumsan incidunt, omnis dolorum dignissimos! Aliquet mauris quam 
  omnis tempor, pulvinar proident explicabo sociosqu corporis do quisquam mauris voluptate
   incidunt, viverra senectus commodi orci beatae cupidatat ad, provident, deserunt occaecati,
    quaerat dui, cumque pellentesque adipiscing! Perferendis mollit risus, elementum, habitasse.
Inceptos tempore, sapiente porta! Exercitation cras minima cubilia sit eius scelerisque 
iusto, nibh dicta imperdiet montes eaque, sit molestias turpis turpis placerat. Pede hymenaeos
 consectetur temporibus impedit? Totam, vero, elementum? Suspendisse hic! Tenetur commodi
  nisl dolores magna temporibus urna, placeat gravida nascetur volutpat blandit recusandae
   ad assumenda pede? Optio quidem repudiandae sapien ad et, vestibulum! Molestias veritatis.
    Massa quae dignissimos condimentum blandit repellendus, elementum, placeat laboriosam maecenas? Fringilla, quam. Nihil reiciendis sapien adipisicing molestias euismod harum, scelerisque? Convallis vulputate dapibus nullam ligula, expedita fusce metus morbi vestibulum minus consectetur montes, vivamus! Voluptates? Potenti, hymenaeos? Explicabo, earum eos saepe malesuada? Aperiam.
Reprehenderit pretium ultrices taciti, aspernatur ullamco, pretium etiam consectetur,
 ea labore aut sollicitudin facilis ligula ornare etiam odio. Justo cumque ratione, porro
  sociis dolore! Fugiat duis, laoreet, esse urna laoreet diam per, dicta nec. Laborum, sequi volutpat cumque urna cupiditate, duis sollicitudin voluptas nibh voluptatibus? Adipiscing dapibus urna, beatae ullam conubia vulputate placeat molestie excepteur cillum mus torquent vero odio? Enim habitasse vitae? Maxime, sapiente integer posuere volutpat, harum risus? A felis, sint odio conubia. Adipiscing doloribus sit quo etiam. Parturient! Parturient assumenda ut, porta quisquam arcu alias assumenda, voluptas? Aenean labore cras porro facilisis, eius placerat quis primis ante.
</p>
     </div>









     <div className="likeArticleCon">
    <button onClick={()=>setLiked(!liked)} style={{background:`${liked==true ? '#9c9a9a' : '#ec9735'}`,
     boxShadow:`${liked==true ? 'none' : '-1px 2px 4px rgba(0, 0, 0, 0.2)'}`}}>
        <i className='fa fa-thumbs-up'><p> {liked===true ? 1 : 0} </p></i>
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

     <SlidingArticles/>

    </>
    )
}