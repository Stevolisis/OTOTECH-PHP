import { useState,useEffect } from "react"
import Swal from 'sweetalert2';
import { MultiSelect } from "react-multi-select-component";
import { useRouter } from "next/router";
import axios from 'axios';

export default function EditStaff(){
    const [imgpreview,setImgpreview]=useState('');
    const router=useRouter();
    const {id}=router.query;
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


  function loadStaff(){
    if(id!==undefined){
    axios.get(`/api/staffs/getStaff/${id}`)
    .then(res=>{
        let data=res.data.data;
        if(res.data.status==='success'){
            setfull_name(data[0].full_name)
            setemail(data[0].email)
            setdescription(data[0].description)
            setposition(data[0].position)
            setwhatsapp(data[0].whatsapp)
            setdribble(data[0].dribble)
            setgithub(data[0].github)
            setlinkedin(data[0].linkedin)
            settwitter(data[0].twitter)
            setinstagram(data[0].instagram)
            setstatus(data[0].status)
            setselectedOption(data[0].priveldges);
            setImgpreview(data[0].img.url);
        }else{
            Swal.fire(
                'Error',
                res.data.status,
                'warning'
            )
        }
    }).catch(err=>{
        Swal.fire(
            'Error',
            'Error Occured at Axios',
            'warning'
        )           
    });
 }else{
    return;
 }
    }



    
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
        loadStaff();
    },[id]);


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
    <select value={whatsapp.status} onChange={(e)=>setwhatsapp({status:e.target.value,link:whatsapp.link})}>
        <option value='active'>Activate</option>
        <option value='inactive'>Deactivate</option>
    </select>
</div>
<div className='adminLinksInput'>
    <p>Whatsapp Link</p>
    <input type='text' value={whatsapp.link} onChange={(e)=>setwhatsapp({status:whatsapp.status,link:e.target.value})}/>
</div>
</div>

<div className='adminLinks'>
<div className='adminLinksPrefix'>
    <p>Status</p>
    <select value={dribble.status} onChange={(e)=>setdribble({status:e.target.value,link:dribble.link})}>
        <option value='active'>Activate</option>
        <option value='inactive'>Deactivate</option>
    </select>
</div>
<div className='adminLinksInput'>
    <p>Dribble Link</p>
    <input type='text' value={dribble.link} onChange={(e)=>setdribble({status:dribble.status,link:e.target.value})}/>
</div>
</div>
</div>


        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={github.status} onChange={(e)=>setgithub({status:e.target.value,link:github.link})}>
                <option value='active'>Activate</option>
                <option value='deactive'>Deativate</option>

            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Github Link</p>
            <input type='text' value={github.link} onChange={(e)=>setgithub({status:github.status,link:e.target.value})}/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={linkedin.status} onChange={(e)=>setlinkedin({status:e.target.value,link:linkedin.link})}>
                <option value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>LinkedIn Link</p>
            <input type='text' value={linkedin.link} onChange={(e)=>setlinkedin({status:linkedin.status,link:e.target.value})}/>
        </div>
        </div>
        </div>


        
        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={twitter.status} onChange={(e)=>settwitter({status:e.target.value,link:twitter.link})}>
                <option value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Twitter Link</p>
            <input type='text' value={twitter.link} onChange={(e)=>settwitter({status:twitter.status,link:e.target.value})}/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select value={instagram.status} onChange={(e)=>setinstagram({status:e.target.value,link:instagram.link})}>
                <option value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Instagram Link</p>
            <input type='text' value={instagram.link} onChange={(e)=>setinstagram({status:instagram.status,link:e.target.value})}/>
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