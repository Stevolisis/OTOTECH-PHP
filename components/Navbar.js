import Link from "next/link";

export default function Navbar({section}){

    return(
        <>
        <div className="navbar">
            <div className="subNav1">
            {section==='Admin' ? <>
            <div><Link href='/'>Home</Link></div>
            <div><Link href='/admin'>Dashboard</Link></div>
            <div><Link href='/admin/categories'>Categories</Link></div>
            <div><Link href='/admin/articles'>Articles</Link></div>
            <div><Link href='/admin/users'>Users</Link></div>
            <div><Link href='/admin/staffs'>Staffs</Link></div>
            <div><Link href='/admin/analytics'>Analytics</Link></div>
            <div><Link href='/'>Customer Care</Link></div>
            </>
            : 
            <>
            <div><Link href='/'>Home</Link></div>
            <div><Link href='https://ototech22.github.io/OTOTECH-website/about.html'>About Us</Link></div>
            <div><Link href='https://ototech22.github.io/OTOTECH-website/#service'>Our Services</Link></div>
            <div><Link href='https://ototech22.github.io/OTOTECH-website/'>Learn More</Link></div>
            <div><Link href='https://ototech22.github.io/OTOTECH-website/contact.html'>Contact Us</Link></div>
            </>
            }
            </div>
            <div className="subNav2">
                <Link href='#'>Lets Build your Project</Link>
            </div>
        </div>
        </>
    )
}