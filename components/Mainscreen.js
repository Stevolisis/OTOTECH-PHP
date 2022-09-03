import Link from "next/link";
import Image from "next/image";

export default function Mainscreen({heading,description,imgLink,page}){

    return(
    <>
      <div className="mainScreenCon">
      <div className="mainScreen">
      {/* <Image 
            src='/OTOTECH2.jpg'
            layout="fill"
            objectFit="fill"
            blurDataURL="/favicon.io"
            placeholder="blur"
            style={{zIndex:'-1'}}
            priority
            /> */}
      <div className="main1"><h3>{heading}</h3></div>
      <div className="main2"> <p>
      {description}
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

    </>
    )
}