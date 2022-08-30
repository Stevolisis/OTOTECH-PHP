import Navbar from "./Navbar";
import Link from "next/link";
import NavbarController from './NavbarController'

export default function AdminHeader({children}){

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






      <Navbar section='Admin'/>
      






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
<div><Link href='/admin'>Dashboard</Link></div>
<div><Link href='/admin/categories'>Categories</Link></div>
<div><Link href='/admin/articles'>Articles</Link></div>
<div><Link href='/admin/users'>Users</Link></div>
<div><Link href='/admin/staff'>Staffs</Link></div>
<div><Link href='/admin/analytics'>Analytics</Link></div>
<div><Link href='/'>Customer Support System</Link></div>
</div>
</div>









<div className='mainBody'>
{children}
</div>





</div>
          </>
    )
}
