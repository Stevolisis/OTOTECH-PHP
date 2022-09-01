import { useState } from "react"
import Swal from 'sweetalert2';
import { MultiSelect } from "react-multi-select-component";

export default function EditStaff(){
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
        Swal.fire(
            'Successful!',
            'Staff Edited',
            'success'
          )
    }
    
    function imgPreview(e){
        setImgpreview(URL.createObjectURL(e.target.files[0]));
    }

    function show(){
        console.log(selectedOption);
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
            <select name='facebookStatus'>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Dribble Link</p>
            <input type='text' name='facebookLink' />
        </div>
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
            <p>Github Link</p>
            <input type='text' name='whatsappLink'/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select name='facebookStatus'>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>LinkedIn Link</p>
            <input type='text' name='facebookLink' />
        </div>
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
            <p>Twitter Link</p>
            <input type='text' name='whatsappLink'/>
        </div>
        </div>

        <div className='adminLinks'>
        <div className='adminLinksPrefix'>
            <p>Status</p>
            <select name='facebookStatus'>
                <option defaultValue='selected' value='active'>Activate</option>
                <option value='deactive'>Deativate</option>
            </select>
        </div>
        <div className='adminLinksInput'>
            <p>Instagram Link</p>
            <input type='text' name='facebookLink' />
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
        <button>EDIT</button>
        </div>
        </div>
        </form>  
        </>
    )
}