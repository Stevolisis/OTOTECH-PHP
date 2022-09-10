import { useState,useRef, useEffect } from "react"
import Swal from 'sweetalert2';
import dynamic from "next/dynamic";
import axios from "axios";

const TextEditor = dynamic(() =>
import("../../../../components/TextEditor"), {   ssr: false });


export default function AddArticle(){
    const [imgpreview,setImgpreview]=useState('');
    const [authors,setAuthors]=useState([]);
    const [categories,setCategories]=useState([]);
    const editorRef=useRef();

    function loadAuthors(){
        axios.get('/api/staffs/getStaffs')
        .then(res=>{
            let data=res.data.data;
            if(res.data.status==='success'){
                setAuthors(data)
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
    }

    function loadCategories(){
        axios.get('/api/categories/getCategories')
        .then(res=>{
            let status=res.data.status;
            let data=res.data.data;
            if(status==='success'){
                setCategories(data)
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
    }


    function handleSubmit(e){
        e.preventDefault();
        const formData=new FormData(e.target);
        formData.append('content',editorRef.current.getContent())
        axios.post('/api/articles/addArticle',formData,{withCredentials:true})
        .then(res=>{
            let status=res.data.status;
            if(status==='success'){
                Swal.fire(
                    'Successful!',
                    'Article Added',
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
                'error'
            )
        })
    }

    function show(){
        console.log(editorRef.current.getContent())
     }

    
    function imgPreview(e){
        setImgpreview(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(()=>{
        loadAuthors()
        loadCategories()
    },[])



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
            <input type='text' name='title'/>
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Category</p>
            <select name='category'>
            {categories.map(category=>{
                return <option value={category._id} key={category._id}>{category.name}</option>
            })}
            </select>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Author</p>
            <select name='author'>
            {authors.map(author=>{
                return <option value={author._id} key={author._id}>{author.full_name} ({author.position})</option>
            })}
            </select>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Content</p>
            <TextEditor editorRef={editorRef} show={show}/>
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