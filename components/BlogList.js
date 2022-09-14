import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import parse from 'html-react-parser';

export default function BlogList({articles}){
  const months=['January','February','March','April','May','June','July',
  'August','September','October','November','December'];
  let listing;
  
  if(articles!== undefined){
     listing=articles.map((article,i)=>{
      const {title,img,author,slug,description,views,likes,day,month,year}=article;
  
      return(
        <Link href={slug} key={i}><a className='blogCon' key={i}>
        <div className='blogImg'>
              <Image 
              src={img.url}
              layout="fill"
              blurDataURL="/favicon.io"
              placeholder="blur"
              priority
              />
        </div>
        <div className='blogInfo'>
  
        <div className="blogMetaData">
        <div><i className='fa fa-user-circle'/><span>{author.full_name}</span></div>
        <div><i className='fa fa-clock-o'/><span>{day}th {months[month]}, {year}</span></div>
        </div>
  
        <div>
        <h3>{title}</h3>
          <p>{parse(description)}</p> 
        </div>
        </div>
  
        <div className='blogDataCon'>
          <div className='blogData'>
          <i className='fa fa-eye'><p>{views}</p></i>
          <i className='fa fa-thumbs-up'><p>{likes}</p></i>
          </div>
          <div className='blogRead'><Link href='#'><p>Read</p></Link></div>
        </div>
        </a>
      </Link>

      )
    })
  }
 

    return(
        <>
        <div className='categories'>
          {listing}



        
        </div>
        </>
    )
}