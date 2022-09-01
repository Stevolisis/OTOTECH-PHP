import { useState } from "react"
import Swal from 'sweetalert2';

export default function EditCategory(){
    const [imgpreview,setImgpreview]=useState('');

    function handleSubmit(e){
        e.preventDefault();
        Swal.fire(
            'Successful!',
            'Category Edited',
            'success'
          )
    }
    
    function imgPreview(e){
        setImgpreview(URL.createObjectURL(e.target.files[0]));
    }


    return(
        <>
        <div className='mainHeading'>
            <p>Edit Category</p>
        </div>


        <form onSubmit={handleSubmit}>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Name</p>
            <input type='text' name='name'/>
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Slug</p>
            <input type='text' name='slug'/><p>the 'slug is the URL-friendly version of the 
                name. It should contain only lowercase letters, numbers and hyphens'</p>
        </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Description</p>
            <textarea type='text' name='decription'/><p>description should not be more than 150 words</p>
        </div>
        </div>


        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Icon</p>
            <select name='icon'>
            <option defaultValue>art</option>
            <option>rocket</option>
            <option>pencil</option>
            <option>globe</option>
            <option>user</option>
            <option>phone</option>
            <option>desktop</option>
            <option>brush</option>
            </select>
            <p>Icon Selected: <i className="fa fa-rocket"/></p>
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