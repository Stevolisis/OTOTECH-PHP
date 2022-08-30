import Link from "next/link";
import { useEffect } from "react";
import CategorydropDown from './CategorydropDown'
import Navbar from './Navbar'
import NavbarController from './NavbarController'
import $ from 'jquery';

export default function Header(){

  function dropdown2(){
    $('.filterSearch2').on('focus',function(){
      $('.filterCon').css('display','block')
      $('.filterCon2').css('display','none')
    });
    $('.filterSearch2').on('focusout',function(){
      $(document).on('click',function(e){
        if(e.target.className=='filterCon div'||e.target.className=='filterSearch2'){
          return
        }else{
          $('.filterCon').css('display','none')
        }
      })
    });
    }

    
  useEffect(()=>{
    dropdown2();  
  })


    return(
        <>

<header>
      <div className="logoCon"><h3>OTOTECH</h3></div>
      <div className="linksCon">
      <Link href='/'>Home</Link>
      <Link href='#'>About Us</Link>
      <Link href='#'>Our Services</Link>
      <Link href='#'>Contact</Link>
      </div>
      <div className="buttonCon">
      <Link href='#'>HIRE A TALENT</Link>
            <NavbarController/>
      </div>

      </header>


      <Navbar/>




              <div className="barCon">
        <CategorydropDown/>

      <div className="searchCon">
      <i className="fa fa-search"></i>
      <input className='filterSearch2' type="text" name="search" placeholder="search topics, fields ..."/>
      </div>
      </div>

      <div className="filterCon">
			<div><Link href='/op'>Blog 1</Link></div>
			<div><Link href='#'>Blog 2</Link></div>
			<div><Link href='#'>Blog 3</Link></div>
			<div><Link href='#'>Blog 4</Link></div>
		  </div>

      <div className="filterCon2">
			<div><Link href='#'>Blog 1</Link></div>
			<div><Link href='#'>Blog 2</Link></div>
			<div><Link href='#'>Blog 3</Link></div>
			<div><Link href='#'>Blog 4</Link></div>
			<div><Link href='#'>Blog 5</Link></div>
			<div><Link href='#'>Blog 6</Link></div>
		  </div>
        </>
    )
}
