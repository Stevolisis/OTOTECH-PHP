import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function BlogList(){
  const [link, setLink]=useState('');

  useEffect(()=>{
    setLink(window.location.href);
  },[]);

    return(
        <>
        <div className='categories'>
        <Link href='/engineering/content-creation' ><a className='blogCon'>
          <div className='blogImg'>
                <Image 
                src='/OTOTECH10.jpg'
                layout="fill"
                blurDataURL="/favicon.io"
                placeholder="blur"
                priority
                />
   </div>
          <div className='blogInfo'>
          <h3>Content Creation</h3>
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

        <Link href='/engineering/content-creation2' ><a className='blogCon'>
          <div className='blogImg'>
            <Image 
            src='/OTOTECH1.jpg'
            layout="fill"
            blurDataURL="/favicon.io"
            placeholder="blur"
            priority
            />
          </div>
          <div className='blogInfo'>
          <h3>React Hooks</h3>
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

        <Link href='/engineering/content-creation' ><a className='blogCon'>
          <div className='blogImg'>
            <Image 
            src='/OTOTECH1.jpg'
            layout="fill"
            blurDataURL="/favicon.io"
            placeholder="blur"
            priority
            />
          </div>
          <div className='blogInfo'>
          <h3>Php Fundamentals</h3>
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

        <Link href='/engineering/content-creation2' ><a className='blogCon'>
          <div className='blogImg'>
            <Image 
            src='/OTOTECH1.jpg'
            layout="fill"
            blurDataURL="/favicon.io"
            placeholder="blur"
            priority
            />
          </div>
          <div className='blogInfo'>
          <h3>Single Page Applications</h3>
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

        <Link href='/engineering/content-creation' ><a className='blogCon'>
          <div className='blogImg'>
            <Image 
            src='/OTOTECH1.jpg'
            layout="fill"
            blurDataURL="/favicon.io"
            placeholder="blur"
            priority
            />
          </div>
          <div className='blogInfo'>
          <h3>Introduction to Adobe XD and Figma</h3>
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

        <Link href='/engineering/content-creation2' ><a className='blogCon'>
          <div className='blogImg'>
            <Image 
            src='/OTOTECH1.jpg'
            layout="fill"
            blurDataURL="/favicon.io"
            placeholder="blur"
            priority
            />
          </div>
          <div className='blogInfo'>
          <h3>React Native</h3>
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

        <Link href='/engineering/content-creation' ><a className='blogCon'>
          <div className='blogImg'>
                <Image 
    src='/OTOTECH10.jpg'
    layout="fill"
    blurDataURL="/favicon.io"
    placeholder="blur"
    priority
    />
   </div>
          <div className='blogInfo'>
          <h3>Backend Development</h3>
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

        <Link href='/engineering/content-creation' ><a className='blogCon'>
          <div className='blogImg'>
                <Image 
    src='/OTOTECH10.jpg'
    layout="fill"
    blurDataURL="/favicon.io"
    placeholder="blur"
    priority
    />
   </div>
          <div className='blogInfo'>
          <h3>Nodejs Libraries</h3>
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
        </>
    )
}