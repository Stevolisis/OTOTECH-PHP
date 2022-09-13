import { useState,useEffect } from "react"
import Swal from 'sweetalert2';
import { MultiSelect } from "react-multi-select-component";
import Link from 'next/link';
import axios from "axios";

export default function AddSupportSystem(){
    const [phone_number,setphone_number]=useState({status:'active',link:''})
    const [gmail,setgmail]=useState({status:'active',link:''})
    const [linkedin,setlinkedin]=useState({status:'active',link:''})
    const [whatsapp,setwhatsapp]=useState({status:'active',link:''})
    const [facebook,setfacebook]=useState({status:'active',link:''})
    const [google_chat,setgoogle_chat]=useState({status:'active',link:''})


    function loadSupport(){
        axios.get('/api/supports/getSupport')
        .then(res=>{
            let data=res.data.data;
            if(res.data.status==='success'){
                setphone_number(data[0].phone_number)
                setgmail(data[0].gmail)
                setfacebook(data[0].facebook)
                setwhatsapp(data[0].whatsapp)
                setgoogle_chat(data[0].google_chat)
                setlinkedin(data[0].linkedin)
            }else{
                Swal.fire(
                    'Error',
                    res.data.status,
                    'warning'
                )
            }
        }).catch(err=>{
            console.log(err)
            Swal.fire(
                'Error',
                'Error Occured at Axios',
                'warning'
            )           
        });
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
        console.log(err);
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
    loadSupport();
},[]);


    return(
        <>
        <div className='mainHeading'>
            <p>Support System</p>
        </div>


        <form onSubmit={handleSubmit}>
        <div className='addcategcon'>


            <div className="adminSupportLink">
                <div><Link href={phone_number.link}><a><i className="fa fa-phone"/></a></Link></div>
                <div><Link href={gmail.link}><a><i className="fa fa-envelope"/></a></Link></div>
                <div><Link href={linkedin.link}><a><i className="fa fa-linkedin"/></a></Link></div>
                <div><Link href={whatsapp.link}><a><i className="fa fa-whatsapp"/></a></Link></div>
                <div><Link href={facebook.link}><a><i className="fa fa-facebook"/></a></Link></div>
                <div><Link href={google_chat.link}><a><i className="fa fa-google"/></a></Link></div>
            </div>


        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={phone_number.status} onChange={(e)=>setphone_number({status:e.target.value,link:phone_number.link})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Phone Number</p>
            <input type='text' value={phone_number.link} onChange={(e)=>setphone_number({status:phone_number.status,link:e.target.value})}/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={gmail.status} onChange={(e)=>setgmail({status:e.target.value,link:gmail.link})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Gmail Link</p>
            <input type='text' value={gmail.link} onChange={(e)=>setgmail({status:gmail.status,link:e.target.value})}/>
        </div>
        </div>
        </div>


        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={linkedin.status} onChange={(e)=>setlinkedin({status:e.target.value,link:linkedin.link})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>LinkedIn Link</p>
            <input type='text' value={linkedin.link} onChange={(e)=>setlinkedin({status:linkedin.status,link:e.target.value})}/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={whatsapp.status} onChange={(e)=>setwhatsapp({status:e.target.value,link:whatsapp.link})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Whatsapp Link</p>
            <input type='text' value={whatsapp.link} onChange={(e)=>setwhatsapp({status:whatsapp.status,link:e.target.value})}/>
        </div>
        </div>
        </div>


        
        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={facebook.status} onChange={(e)=>setfacebook({status:e.target.value,link:facebook.link})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Facebook Link</p>
            <input type='text' value={facebook.link} onChange={(e)=>setfacebook({status:facebook.status,link:e.target.value})}/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={google_chat.status} onChange={(e)=>setgoogle_chat({status:e.target.value,link:google_chat.link})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Google Chat Link</p>
            <input type='text' value={google_chat.link} onChange={(e)=>setgoogle_chat({status:google_chat.status,link:e.target.value})}/>
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