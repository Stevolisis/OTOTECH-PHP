import Link from "next/link";

export default function Footer(){

    return(
        <>
  <footer>
    <div className='footerCon'>
      <div className='footerLinksCon'>
        <h4>OTOTECH Industries</h4>
        <p> For more enquires and service placement please feel free to
           contact us through the following Social media's.</p>
           <ul>
           <li><Link href='#'><i className='fa fa-facebook'></i></Link></li>
           <li><Link href='#'><i className='fa fa-phone'></i></Link></li>
           <li><Link href='#'><i className='fa fa-linkedin'></i></Link></li>
           <li><Link href='#'><i className='fa fa-whatsapp'></i></Link></li>
           <li><Link href='#'><i className='fa fa-google'></i></Link></li>
           <li><Link href='#'><i className='fa fa-envelope'></i></Link></li>
           </ul>
      </div>

      <div className='footerLinksCon'>
        <h4>Additional Pages</h4>
        <ol>
        <li><Link href='#'>About Us</Link></li>
        <li><Link href='#'>How We Work</Link></li>
        <li><Link href='#'>Quick Support</Link></li>
        <li><Link href='#'>Privacy Policy</Link></li>
        </ol>
      </div>

      <div className='footerLinksCon'>
        <h4>Useful Links</h4>
        <ol>
        <li><Link href='#'>Page Privacy</Link></li>
        <li><Link href='#'>Lincences and Registration</Link></li>
        </ol>
      </div>
      
      <div className='footerLinksCon'>
        <h4>Contact Us</h4>
        <form>
        <input type='text' placeholder='Full Name'/>
        <input type='email' placeholder='E-Mail Address'/>
        <textarea placeholder='Your Message'>

        </textarea>
        <button>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  </footer>
  <div className='footerCon2'><p>Copyright © 2022 OTOTECH Industries.</p></div>
        </>
    )
}
