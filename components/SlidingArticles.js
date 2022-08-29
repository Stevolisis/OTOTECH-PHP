import Link from "next/link";
import { useEffect, useState } from "react";

export default function SlidingArticles(){
  const [link, setLink]=useState('');

  useEffect(()=>{
    setLink((window.location.href).split('/')[1]);
  },[]);

    return(
        <>
        
    <div className='blogSliderHeading'><h2>Most Read Articles</h2></div>

<div className='blogSliderCon'>
  <div className='blogSlider'>
  <Link href='/engineering/content-creation' ><a className='blogCon'>
    <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
    <div className='blogInfo'>
    <h3>Content Writing</h3>
    <p>by <span>STEVEN JOSEPH</span></p>
      <p>Explore in-depth developer tutorials and new technology 
        announcements created by professional engineers in the Ototech 
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
  <Link href='/engineering/content-creation' ><a className='blogCon'>
    <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
    <div className='blogInfo'>
    <h3>Content Writing</h3>
    <p>by <span>STEVEN JOSEPH</span></p>
      <p>Explore in-depth developer tutorials and new technology 
        announcements created by professional engineers in the Ototech 
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
  <Link href='/engineering/content-creation' ><a className='blogCon'>
    <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
    <div className='blogInfo'>
    <h3>Content Writing</h3>
    <p>by <span>STEVEN JOSEPH</span></p>
      <p>Explore in-depth developer tutorials and new technology 
        announcements created by professional engineers in the Ototech 
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
  <Link href='/engineering/content-creation' ><a className='blogCon'>
    <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
    <div className='blogInfo'>
    <h3>Content Writing</h3>
    <p>by <span>STEVEN JOSEPH</span></p>
      <p>Explore in-depth developer tutorials and new technology 
        announcements created by professional engineers in the Ototech 
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
  <Link href='/engineering/content-creation' ><a className='blogCon'>
    <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
    <div className='blogInfo'>
    <h3>Content Writing</h3>
    <p>by <span>STEVEN JOSEPH</span></p>
      <p>Explore in-depth developer tutorials and new technology 
        announcements created by professional engineers in the Ototech 
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
          <Link href='/engineering/content-creation' ><a className='blogCon'>
    <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
    <div className='blogInfo'>
    <h3>Content Writing</h3>
    <p>by <span>STEVEN JOSEPH</span></p>
      <p>Explore in-depth developer tutorials and new technology 
        announcements created by professional engineers in the Ototech 
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
  <Link href='/engineering/content-creation' ><a className='blogCon' style={{width: "300px"}}>
    <div className='blogImg'><picture><img src='/OTOTECH1.jpg'/> </picture></div>
    <div className='blogInfo'>
    <h3>Content Writing</h3>
    <p>by <span>STEVEN JOSEPH</span></p>
      <p>Explore in-depth developer tutorials and new technology 
        announcements created by professional engineers in the Ototech 
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
</div>
        </>
    )
}