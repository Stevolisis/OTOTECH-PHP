import { useState } from "react"
import Swal from 'sweetalert2';
import { MultiSelect } from "react-multi-select-component";
import axios from "axios";

export default function AddStaff(){
    const [imgpreview,setImgpreview]=useState('');
    const [selectedOption,setselectedOption]=useState([])


    
const options = [
    { value: 'Category', label: 'Category' },
    { value: 'Articles', label: 'Articles' },
    { value: 'Comments', label: 'Comments' },
    { value: 'Users', label: 'Users' },
    { value: 'Staffs', label: 'Staffs' },
    { value: 'Analytics', label: 'Analytics' },
    { value: 'Customer Care Sysytem', label: 'Customer Care Sysytem' },
    { value: 'EditCatgeory', label: 'EditCatgeory' },
  ];

  

  function handleSubmit(e){
    e.preventDefault();
    const formData=new FormData(e.target);
    formData.append('priveldges',selectedOption);
    
    axios.post('/api/staffs/addStaff',formData,{withCredentials:true})
    .then(res=>{
        let data=res.data.data;
        if(data==='success'){
            Swal.fire(
                'Successful!',
                'Article Added',
                'success'
            )
        }else{
            Swal.fire(
                'Error!',
                data,
                'warning'
            )  
        }
    }).catch(err=>{
        console.log(err);
    })
}


    
    function imgPreview(e){
        setImgpreview(URL.createObjectURL(e.target.files[0]));
    }


    return(
        <>
        <div className='mainHeading'>
            <p>Add Staff</p>
        </div>


        <form onSubmit={handleSubmit}>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Full Name</p>
            <input type='text' name='full_name'/>
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Email Address</p>
            <input type='email' name='email'/>
        </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Position</p>
            <input type='text' name='position'/>
        </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Description</p>
            <textarea type='text' name='decription'/><p>description should not be more than 150 words</p>
        </div>
        </div>


        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select name='whatsappStatus'>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Whatsapp Link</p>
            <input type='text' name='whatsappLink'/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select name='dribbleStatus'>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Dribble Link</p>
            <input type='text' name='dribbleLink' />
        </div>
        </div>
        </div>


        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select name='githubStatus'>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Github Link</p>
            <input type='text' name='githubLink'/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select name='linkedinStatus'>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>LinkedIn Link</p>
            <input type='text' name='linkedinLink' />
        </div>
        </div>
        </div>


        
        <div className='adminLinkscon'>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select name='twitterStatus'>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Twitter Link</p>
            <input type='text' name='twitterLink'/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select name='instagramStatus'>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Instagram Link</p>
            <input type='text' name='instagramLink' />
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
            <select name='status'>
            <option defaultValue>Activate</option>
            <option>Deactivate</option>
            </select>
            </div>
        </div>
        <div className='admineditbtn'>
        <button >ADD</button>
        </div>
        </div>
        </form>  
        </>
    )
}