import { useState,useRef } from "react"
import Swal from 'sweetalert2';
import {Editor} from '@tinymce/tinymce-react';

export default function AddArticle(){
    const [imgpreview,setImgpreview]=useState('');
    const editorRef=useRef();

    function handleSubmit(e){
        e.preventDefault();
        Swal.fire(
            'Successful!',
            'Article Added',
            'success'
          )
    }
    
    function imgPreview(e){
        setImgpreview(URL.createObjectURL(e.target.files[0]));
    }

    function show(){
        console.log(editorRef.current.getContent())
     }

    return(
        <>
        <div className='mainHeading'>
            <p>Add Article</p>
        </div>


        <form onSubmit={handleSubmit}>
        <div className='addcategcon'>
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Title</p>
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
            <p>Author</p>
            <select name='status'>
            <option defaultValue>James Rodrick</option>
            <option>Mike Slensor</option>
            <option>Rita Bwala</option>
            <option>Ridwan Ahmed</option>
            <option>Hadiza Jotinga</option>
            <option>Randy Jordan</option>
            <option>Helen Romans</option>
            </select>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Description</p>
            <Editor
            onInit={(evt,editor)=> editorRef.current=editor}
            init={{
                menubar:false,
                skin:false,
                content_css:false,
            }}
            onChange={show}
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