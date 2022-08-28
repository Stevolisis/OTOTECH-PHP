import Head from 'next/head'
import Link from 'next/link'
import $ from 'jquery';
import { useEffect } from 'react'
import SlidingArticles from '../components/SlidingArticles';
import BlogList from '../components/BlogList';

export default function Home() {
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



  return (
    <>
      <Head>
        <title>OTOTECH BLOG</title>
        <meta name="description" content="Web Technology, app development, content writing, web management, SEO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>









      <div className="mainScreenCon">
      <div className="mainScreen">
      <div className="main1"><h3>OTOTECH BLOG</h3></div>
      <div className="main2"> <p>
      The Ototech Blog is the top hub for developers, designers, finance experts, executives, and entrepreneurs, featuring key technology updates, tutorials, freelancer resources, and management insights.
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















      <div className='categoriesCon2'>
        <div className='categories'>
        <Link href='/enginneering'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-globe'/></div>
          <div className='categoryInfo'>
            <h2>Enginneering</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>

        <Link href='/graphics'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-paint-brush'/></div>
          <div className='categoryInfo'>
            <h2>Graphics</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>

        <Link href='/web-development'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-desktop'/></div>
          <div className='categoryInfo'>
            <h2>Web Development</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>
      
        <Link href='/ui-ux'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-rocket'/></div>
          <div className='categoryInfo'>
            <h2>UI/UX Design</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>

        <Link href='/app-development'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-mobile'/></div>
          <div className='categoryInfo'>
            <h2>App Development</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>

        <Link href='/content-writing'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-pencil'/></div>
          <div className='categoryInfo'>
            <h2>Content Writing</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>
        </div>
      </div>













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


<SlidingArticles/>









    </>
  )
}
