import Head from 'next/head'
import Link from 'next/link'
import $ from 'jquery';
import { useEffect } from 'react'
import SlidingArticles from '../components/SlidingArticles';

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

  function dropdown2(){
    $('.filterSearch2').on('focus',function(){
      $('.filterCon').css('display','block')
      $('.filterCon2').css('display','none')
    });
    $('.filterSearch2').on('focusout',function(){
      $(document).on('click',function(e){
        if(e.target.className=='filterCon'||e.target.className=='filterSearch2'){
          return
        }else{
          $('.filterCon').css('display','none')
        }
      })
    });
    }


  useEffect(()=>{
    dropdown1();  
  })

  useEffect(()=>{
    dropdown2();  
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
      The Toptal Blog is the top hub for developers, designers, finance experts, executives, and entrepreneurs, featuring key technology updates, tutorials, freelancer resources, and management insights.
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
        <Link href='/categories'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-globe'/></div>
          <div className='categoryInfo'>
            <h2>Enginneering</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>

        <Link href='/categories'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-paint-brush'/></div>
          <div className='categoryInfo'>
            <h2>Graphics</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>

        <Link href='/categories'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-desktop'/></div>
          <div className='categoryInfo'>
            <h2>Web Development</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>
      
        <Link href='/categories'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-rocket'/></div>
          <div className='categoryInfo'>
            <h2>UI/UX Design</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>

        <Link href='/categories'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-mobile'/></div>
          <div className='categoryInfo'>
            <h2>App Development</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>

        <Link href='/categories'><a className='categoryCon'>
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
      <div className='categories'>
        <Link href='#' ><a className='blogCon'>
          <div className='blogImg'><picture><img src='/OTOTECH2.jpg' alt='blog Categ'/></picture></div>
          <div className='blogInfo'>
          <h3>Content Writinkujyhtgrfghjkjhgf</h3>
          <p>by <span>STEVEN JOSEPH</span></p>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles
            </p> 
          </div>

          <div className='blogDataCon'>
            <div className='blogData'>
            <i className='fa fa-eye'><p>32</p></i>
            <i className='fa fa-thumbs-up'><p>22</p></i>
            </div>
            <div className='blogRead'><Link href='#'><p>Read</p></Link></div>
          </div>
          </a>
        </Link>

        <Link href='#' ><a className='blogCon'>
          <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
          <div className='blogInfo'>
          <h3>Content Writing</h3>
          <p>by <span>STEVEN JOSEPH</span></p>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles
            </p> 
          </div>

          <div className='blogDataCon'>
            <div className='blogData'>
            <i className='fa fa-eye'><p>32</p></i>
            <i className='fa fa-thumbs-up'><p>22</p></i>
            </div>
            <div className='blogRead'><Link href='#'><p>Read</p></Link></div>
          </div>
          </a>
        </Link>

        <Link href='#' ><a className='blogCon'>
          <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
          <div className='blogInfo'>
          <h3>Content Writing</h3>
          <p>by <span>STEVEN JOSEPH</span></p>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles
            </p> 
          </div>

          <div className='blogDataCon'>
            <div className='blogData'>
            <i className='fa fa-eye'><p>32</p></i>
            <i className='fa fa-thumbs-up'><p>22</p></i>
            </div>
            <div className='blogRead'><Link href='#'><p>Read</p></Link></div>
          </div>
          </a>
        </Link>

        <Link href='#' ><a className='blogCon'>
          <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
          <div className='blogInfo'>
          <h3>Content Writing</h3>
          <p>by <span>STEVEN JOSEPH</span></p>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles
            </p> 
          </div>

          <div className='blogDataCon'>
            <div className='blogData'>
            <i className='fa fa-eye'><p>32</p></i>
            <i className='fa fa-thumbs-up'><p>22</p></i>
            </div>
            <div className='blogRead'><Link href='#'><p>Read</p></Link></div>
          </div>
          </a>
        </Link>

        <Link href='#' ><a className='blogCon'>
          <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
          <div className='blogInfo'>
          <h3>Content Writing</h3>
          <p>by <span>STEVEN JOSEPH</span></p>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles
            </p> 
          </div>

          <div className='blogDataCon'>
            <div className='blogData'>
            <i className='fa fa-eye'><p>32</p></i>
            <i className='fa fa-thumbs-up'><p>22</p></i>
            </div>
            <div className='blogRead'><Link href='#'><p>Read</p></Link></div>
          </div>
          </a>
        </Link>

        <Link href='#' ><a className='blogCon'>
          <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
          <div className='blogInfo'>
          <h3>Content Writing</h3>
          <p>by <span>STEVEN JOSEPH</span></p>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles
            </p> 
          </div>

          <div className='blogDataCon'>
            <div className='blogData'>
            <i className='fa fa-eye'><p>32</p></i>
            <i className='fa fa-thumbs-up'><p>22</p></i>
            </div>
            <div className='blogRead'><Link href='#'><p>Read</p></Link></div>
          </div>
          </a>
        </Link>

        <Link href='#' ><a className='blogCon'>
          <div className='blogImg'><picture><img src='/OTOTECH2.jpg' alt='blog Categ'/></picture></div>
          <div className='blogInfo'>
          <h3>Content Writing</h3>
          <p>by <span>STEVEN JOSEPH</span></p>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles
            </p> 
          </div>

          <div className='blogDataCon'>
            <div className='blogData'>
            <i className='fa fa-eye'><p>32</p></i>
            <i className='fa fa-thumbs-up'><p>22</p></i>
            </div>
            <div className='blogRead'><Link href='#'><p>Read</p></Link></div>
          </div>
          </a>
        </Link>

        <Link href='#' ><a className='blogCon'>
          <div className='blogImg'><picture><img src='/OTOTECH2.jpg' alt='blog Categ'/></picture></div>
          <div className='blogInfo'>
          <h3>Content Writing</h3>
          <p>by <span>STEVEN JOSEPH</span></p>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles
            </p> 
          </div>

          <div className='blogDataCon'>
            <div className='blogData'>
            <i className='fa fa-eye'><p>32</p></i>
            <i className='fa fa-thumbs-up'><p>22</p></i>
            </div>
            <div className='blogRead'><Link href='#'><p>Read</p></Link></div>
          </div>
          </a>
        </Link>
      </div>

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
