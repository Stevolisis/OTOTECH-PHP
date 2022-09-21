import { useState,useEffect } from "react"
import Swal from 'sweetalert2';
import Link from 'next/link';
import axios from "axios";
import { baseUrl } from "../../../components/BaseUrl";
import { useLoader } from "../../_app";


export const getServerSideProps=async (context)=>{
    let error=context.query;
    try{
      const res=await axios.get(`${baseUrl}/api/supports/getSupport`);
      
      const data= res.data.data[0];
      const editPhone_number= data.phone_number;
      const editGmail= data.gmail;
      const editLinkedin= data.linkedin;
      const editWhatsapp= data.whatsapp;
      const editFacebook= data.facebook;
      const editGoogle_chat= data.google_chat;
      
      return {
        props:{editPhone_number,editGmail,editWhatsapp,editLinkedin,editFacebook,editGoogle_chat}
      }    
      
    }catch(err){
      return {
        props:{error:err.message}
      } 
    }
    
  }


export default function AddSupportSystem({error,editPhone_number,editGmail,editLinkedin,
    editWhatsapp,editFacebook,editGoogle_chat}){
    const [phone_number,setphone_number]=useState({status:'active',link:''})
    const [gmail,setgmail]=useState({status:'active',link:''})
    const [linkedin,setlinkedin]=useState({status:'active',link:''})
    const [whatsapp,setwhatsapp]=useState({status:'active',link:''})
    const [facebook,setfacebook]=useState({status:'active',link:''})
    const [google_chat,setgoogle_chat]=useState({status:'active',link:''});
    const {loading,setloading}=useLoader()

    if(error){
        Swal.fire(
          'Error at ServerSideProps',
          error,
          'warning'
        )
        console.log('laaaaand',error)
  }



function handleSubmit(e){
    e.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "Confirm Action On Support",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Edit it!'
      }).then((result) => {
        if (result.isConfirmed) {
        setloading(true)
    const formData=new FormData(e.target);
    formData.append('phone_number',JSON.stringify(phone_number));
    formData.append('gmail',JSON.stringify(gmail));
    formData.append('linkedin',JSON.stringify(linkedin));
    formData.append('whatsapp',JSON.stringify(whatsapp));
    formData.append('facebook',JSON.stringify(facebook));
    formData.append('google_chat',JSON.stringify(google_chat));
    axios.post('/api/supports/editSupport/',formData)
    .then(res=>{
        let status=res.data.status;
        setloading(false)
        if(status==='success'){
            Swal.fire(
                'Successful!',
                'Support System Edited',
                'success'
            )
        }else{
            Swal.fire(
                'Error!',
                status,
                'warning'
            )  
        }
    }).catch(err=>{
        setloading(false)
        Swal.fire(
            'Error!',
            err.message,
            'warning'
        )  
    })
}
})
}


useEffect(()=>{
    setphone_number(editPhone_number);
    setwhatsapp(editWhatsapp);
    setgmail(editGmail);
    setlinkedin(editLinkedin);
    setfacebook(editFacebook);
    setgoogle_chat(editGoogle_chat)
},[]);


    return(
        <>
        <div className='mainHeading'>
            <p>Support System</p>
        </div>


        <form onSubmit={handleSubmit}>
        <div className='addcategcon'>


            <div className="adminSupportLink">
                <div><Link href={phone_number&&phone_number.link}><a><i className="fa fa-phone"/></a></Link></div>
                <div><Link href={gmail&&gmail.link}><a><i className="fa fa-envelope"/></a></Link></div>
                <div><Link href={linkedin&&linkedin.link}><a><i className="fa fa-linkedin"/></a></Link></div>
                <div><Link href={whatsapp&&whatsapp.link}><a><i className="fa fa-whatsapp"/></a></Link></div>
                <div><Link href={facebook&&facebook.link}><a><i className="fa fa-facebook"/></a></Link></div>
                <div><Link href={google_chat&&google_chat.link}><a><i className="fa fa-google"/></a></Link></div>
            </div>


        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={phone_number&&phone_number.status} onChange={(e)=>setphone_number({...phone_number,['status']:e.target.value})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Phone Number</p>
            <input type='text' value={phone_number&&phone_number.link} onChange={(e)=>setphone_number({...phone_number,['link']:e.target.value})}/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={gmail&&gmail.status} onChange={(e)=>setgmail({...gmail,['status']:e.target.value})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Gmail Link</p>
            <input type='text' value={gmail&&gmail.link} onChange={(e)=>setgmail({...gmail,['link']:e.target.value})}/>
        </div>
        </div>
        </div>


        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={linkedin&&linkedin.status} onChange={(e)=>setlinkedin({...linkedin,['status']:e.target.value})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>LinkedIn Link</p>
            <input type='text' value={linkedin&&linkedin.link} onChange={(e)=>setlinkedin({...linkedin,['link']:e.target.value})}/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={whatsapp&&whatsapp.status} onChange={(e)=>setwhatsapp({...whatsapp,['status']:e.target.value})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Whatsapp Link</p>
            <input type='text' value={whatsapp&&whatsapp.link} onChange={(e)=>setwhatsapp({...whatsapp,['link']:e.target.value})}/>
        </div>
        </div>
        </div>


        
        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={facebook&&facebook.status} onChange={(e)=>setfacebook({...facebook,['status']:e.target.value})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Facebook Link</p>
            <input type='text' value={facebook&&facebook.link} onChange={(e)=>setfacebook({...facebook,['link']:e.target.value})}/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={google_chat&&google_chat.status} onChange={(e)=>setgoogle_chat({...google_chat,['status']:e.target.value})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Google Chat Link</p>
            <input type='text' value={google_chat&&google_chat.link} onChange={(e)=>setgoogle_chat({...google_chat,['link']:e.target.value})}/>
        </div>
        </div>
        </div>

        <div className='admineditbtn'>
        <button >EDIT</button>
        </div>
        </div>
        </form>  
        </>
    )
}