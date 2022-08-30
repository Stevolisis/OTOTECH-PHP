import Link from "next/link";

export default function Mainscreen({heading,description,imgLink,page}){

    return(
    <>
      <div className="mainScreenCon" style={{backgroundImage:`${page==='blogCategory' ? 'linear-gradient(30deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5))' : ''},url('${imgLink}') `}}>
      <div className="mainScreen">
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