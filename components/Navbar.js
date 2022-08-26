import Link from "next/link";

export default function Navbar(){

    return(
        <>
        <div className="navbar">
            <div className="subNav1">
            <div><Link href='#'>Home</Link></div>
            <div><Link href='#'>About Us</Link></div>
            <div><Link href='#'>Our Services</Link></div>
            <div><Link href='#'>Learn More</Link></div>
            <div><Link href='#'>Contact Us</Link></div>
            </div>
            <div className="subNav2">
                <Link href='#'>Lets Build your Project</Link>
            </div>
        </div>
        </>
    )
}