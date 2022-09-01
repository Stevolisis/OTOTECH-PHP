import Navbar from "./Navbar";
import Link from "next/link";
import NavbarController from './NavbarController'
import { useState } from "react";

export default function AdminHeader({children}){
  const [navStatus,setnavStatus]=useState(false);

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
            <NavbarController navStatus={navStatus} setnavStatus={setnavStatus}/>
      </div>

      </header>






      <Navbar section='Admin' navStatus={navStatus} setnavStatus={setnavStatus}/>
      






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

      <div className='adminAllCon'>

<div className='navbar2'>
<div className="subNav3">
<div className='navusername'><i className='fa fa-user-circle'/><span>Admin Steven</span></div>
<div className='navlinks'><Link href='/admin' >Dashboard</Link></div>
<div className='navlinks'><Link href='/admin/categories' >Categories</Link></div>
<div className='navlinks'><Link href='/admin/articles' >Articles</Link></div>
<div className='navlinks'><Link href='/admin/comments' >Comments</Link></div>
<div className='navlinks'><Link href='/admin/users' >Users</Link></div>
<div className='navlinks'><Link href='/admin/staffs' >Staffs</Link></div>
<div className='navlinks'><Link href='/admin/analytics' >Analytics</Link></div>
<div className='navlinks'><Link href='/admin/support_system' >Support System</Link></div>
</div>
</div>








<div className='mainBody'>
{children}
</div>




</div>
          </>
    )
}
