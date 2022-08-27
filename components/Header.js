import Link from "next/link";
import CategorydropDown from './CategorydropDown'
import Navbar from './Navbar'
import NavbarController from './NavbarController'

export default function Header(){

    return(
        <>

<header>
      <div className="logoCon"><h3>OTOTECH</h3></div>
      <div className="linksCon">
      <Link href='#'>About Us</Link>
      <Link href='#'>Learn More</Link>
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
