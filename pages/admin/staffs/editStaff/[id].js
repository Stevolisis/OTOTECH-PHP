import { useState,useEffect } from "react"
import Swal from 'sweetalert2';
import { MultiSelect } from "react-multi-select-component";
import axios from 'axios';
import { baseUrl } from "../../../BaseUrl";



export const getServerSideProps=async (context)=>{
    let error=context.params.id;
    try{
      const res=await axios.get(`${baseUrl}/api/staffs/getStaff/${context.params.id}`);
      
      const data= res.data.data[0];
      const editId=data._id;
      const editFull_name= data.full_name;
      const editEmail= data.email;
      const editSelectedOption= data.priveldges;
      const editPosition= data.position;
      const editDescription= data.description;
      const editStatus= data.status;
      const editWhatsapp= data.whatsapp;
      const editDribble= data.dribble;
      const editGithub= data.github;
      const editLinkedin= data.linkedin;
      const editTwitter= data.twitter;
      const editInstagram= data.instagram;
      const editImg= data.img.url;
      
      return {
        props:{editId,editFull_name,editEmail,editSelectedOption,editPosition,editDescription,
        editStatus,editWhatsapp,editDribble,editGithub,editLinkedin,editTwitter,
        editInstagram,editImg}
      }    
      
    }catch(err){
      return {
        props:{error:err.message}
      } 
    }
    
}

export default function EditStaff({error,editId,editSelectedOption,editFull_name,editEmail,
    editPosition,editDescription,editStatus,editWhatsapp,editDribble,editGithub,
    editLinkedin,editTwitter,editInstagram,editImg}){
   
    const [id,setid]=useState('')
    const [selectedOption,setselectedOption]=useState([])
    const [full_name,setfull_name]=useState('');
    const [email,setemail]=useState('');
    const [position,setposition]=useState('');
    const [description,setdescription]=useState('');
    const [status,setstatus]=useState('');
    const [whatsapp,setwhatsapp]=useState({status:'active',link:''})
    const [dribble,setdribble]=useState({status:'active',link:''})
    const [github,setgithub]=useState({status:'active',link:''})
    const [linkedin,setlinkedin]=useState({status:'active',link:''})
    const [twitter,settwitter]=useState({status:'active',link:''})
    const [instagram,setinstagram]=useState({status:'active',link:''})
    const [imgpreview,setImgpreview]=useState('');


    if(error){
        Swal.fire(
          'Error at ServerSideProps',
          error,
          'warning'
        )
        console.log('laaaap',error)
  }
    
const options = [
    { value: 'Add Category', label: 'Add Category' },
    { value: 'Edit Category', label: 'Edit Category' },
    { value: 'Add Articles', label: 'Add Articles' },
    { value: 'Edit Articles', label: 'Edit Articles' },
    { value: 'Comments', label: 'Comments' },
    { value: 'Edit Users', label: 'Edit Users' },
    { value: 'Add Staffs', label: 'Add Staffs' },
    { value: 'Edit Staffs', label: 'Edit Staffs' },
    { value: 'Analytics', label: 'Analytics' },
    { value: 'Support System', label: 'Support System' },
  ];



    
    function handleSubmit(e){
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "Confirm Action On Staff",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Edit it!'
          }).then((result) => {
            if (result.isConfirmed) {
        const formData=new FormData(e.target);
        formData.append('id',id);
        formData.append('whatsapp',JSON.stringify(whatsapp));
        formData.append('dribble',JSON.stringify(dribble));
        formData.append('github',JSON.stringify(github));
        formData.append('linkedin',JSON.stringify(linkedin));
        formData.append('twitter',JSON.stringify(twitter));
        formData.append('instagram',JSON.stringify(instagram));
        formData.append('priveldges',JSON.stringify(selectedOption));
        axios.post('/api/staffs/editStaff/',formData,{withCredentials:true})
        .then(res=>{
            let status=res.data.status;
            if(status==='success'){
                Swal.fire(
                    'Successful!',
                    'Staff Edited',
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
    
    function imgPreview(e){
        setImgpreview(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(()=>{
        setfull_name(editFull_name)
        setid(editId)
        setemail(editEmail)
        setdescription(editDescription)
        setselectedOption(editSelectedOption)
        setwhatsapp(editWhatsapp)
        setdribble(editDribble)
        setgithub(editGithub)
        setlinkedin(editLinkedin)
        settwitter(editTwitter)
        setinstagram(editInstagram)
        setposition(editPosition)
        setstatus(editStatus)
        setImgpreview(editImg)
    },[])



    return(
        <>
        <div className='mainHeading'>
            <p>Edit Staff</p>
        </div>


        <form onSubmit={handleSubmit}>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Full Name</p>
            <input type='text' name='full_name' value={full_name} onChange={(e)=>setfull_name(e.target.value)}/>
            </div>
        </div>
        
        <div className='admineditnamecon'>
        <div className='admineditname'>
            <p>Email Address</p>
            <input type='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
        </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Position</p>
            <input type='text' name='position' value={position} onChange={(e)=>setposition(e.target.value)}/>
        </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Description</p>
            <textarea type='text' name='description' value={description} onChange={(e)=>setdescription(e.target.value)}/><p>description should not be more than 150 words</p>
        </div>
        </div>


<div className='adminLinkscon'>

<div className='adminLinks'>
<div className='adminLinksPrefix'>
    <p>Status</p>
    <select value={whatsapp&&whatsapp.status} onChange={(e)=>setwhatsapp({...whatsapp,['status']:e.target.value})}>
        <option value='active'>Activate</option>
        <option value='inactive'>Deactivate</option>
    </select>
</div>
<div className='adminLinksInput'>
    <p>Whatsapp Link</p>
    <input type='text' value={whatsapp&&whatsapp.link} onChange={(e)=>setwhatsapp({...whatsapp,['link']:e.target.value})}/>
</div>
</div>

<div className='adminLinks'>
<div className='adminLinksPrefix'>
    <p>Status</p>
    <select value={dribble&&dribble.status} onChange={(e)=>setdribble({...dribble,['status']:e.target.value})}>
        <option value='active'>Activate</option>
        <option value='inactive'>Deactivate</option>
    </select>
</div>
<div className='adminLinksInput'>
    <p>Dribble Link</p>
    <input type='text' value={dribble&&dribble.link} onChange={(e)=>setdribble({...dribble,['link']:e.target.value})}/>
</div>
</div>
</div>


        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={github&&github.status} onChange={(e)=>setgithub({...github,['status']:e.target.value})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>

            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Github Link</p>
            <input type='text' value={github&&github.link} onChange={(e)=>setgithub({...github,['link']:e.target.value})}/>
        </div>
        </div>

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
        </div>


        
        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={twitter&&twitter.status} onChange={(e)=>settwitter({...twitter,['status']:e.target.value})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Twitter Link</p>
            <input type='text' value={twitter&&twitter.link} onChange={(e)=>settwitter({...twitter,['link']:e.target.value})}/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={instagram&&instagram.status} onChange={(e)=>setinstagram({...instagram,['status']:e.target.value})}>
                <option value='active'>Activate</option>
                <option value='inactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Instagram Link</p>
            <input type='text' value={instagram&&instagram.link} onChange={(e)=>setinstagram({...instagram,['link']:e.target.value})}/>
        </div>
        </div>
        </div>



        <div className='admineditnamecon2'>
        <div className='admineditname'>
        <p>Priveldges</p>
        <MultiSelect
        options={options}
        value={selectedOption}
        onChange={setselectedOption}
        labelledBy="Select"
        disableSearch={true}
        />
        </div>
        </div>
      



        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Thumbnail(Image)</p>

            <div className='previewimg'>
            <img src={imgpreview}/>
            </div>

            <input type='file' name='img_link' onChange={imgPreview}/>

        </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Status</p>
            <select name='status' value={status} onChange={(e)=>setstatus(e.target.value)}>
            <option value='active'>Activate</option>
            <option value='inactive'>Deactivate</option>
            </select>
            </div>
        </div>
        <div className='admineditbtn'>
        <button>EDIT</button>
        </div>
        </div>
        </form>  
        </>
    )
}