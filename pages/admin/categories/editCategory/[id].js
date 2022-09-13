import { useRouter } from "next/router";
import { useState,useEffect } from "react"
import Swal from 'sweetalert2';
import axios from "axios";

export default function EditCategory(){
    const [imgpreview,setImgpreview]=useState('');
    const router=useRouter();
    const {id}=router.query;
    const [name,setname]=useState('');
    const [description,setdescription]=useState('');
    const [icon,seticon]=useState('');
    const [status,setstatus]=useState('');

    function loadCategory(){
        if(id!==undefined){
        axios.get(`/api/categories/getCategory/${id}`)
        .then(res=>{
            let data=res.data.data;
            if(res.data.status==='success'){
                setname(data[0].name)
                setdescription(data[0].description)
                seticon(data[0].icon)
                setImgpreview(data[0].img.url)
                setstatus(data[0].status)
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
            text: "Confirm Action On Category",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Edit it!'
          }).then((result) => {
            if (result.isConfirmed) {
        const formData=new FormData(e.target);
        formData.append('id',id);
        axios.post('/api/categories/editCategory/',formData,{withCredentials:true})
        .then(res=>{
            let status=res.data.status;
            if(status==='success'){
                Swal.fire(
                    'Successful!',
                    'Category Edited',
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
        loadCategory();
    },[id]);

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
            <input type='text' name='name' value={name} onChange={(e)=>setname(e.target.value)}/>
            </div>
        </div>

        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Description</p>
            <textarea type='text' name='decription' value={description} onChange={(e)=>setdescription(e.target.value)}/><p>description should not be more than 150 words</p>
        </div>
        </div>


        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Icon</p>
            <select name='icon' value={icon} onChange={(e)=>seticon(e.target.value)}>
            <option value='dollar' defaultValue>Dollars</option>
            <option value='rocket'>Rocket</option>
            <option value='pencil'>Pencil</option>
            <option value='globe'>Globe</option>
            <option value='user'>User</option>
            <option value='clipboard'>ClipBoard</option>
            <option value='phone'>Phone</option>
            <option value='desktop'>Desktop</option>
            <option value='laptop'>Laptop</option>
            <option value='tablet'>Tablet</option>
            <option value='paint-brush'>Paint Brush</option>
            <option value='github'>Github</option>
            <option value='camera'>Camera</option>
            <option value='cloud'>Cloud</option>
            <option value='check'>Check</option>
            <option value='bars'>Bars</option>
            <option value='download'>Download</option>
            <option value='star'>Star</option>
            <option value='comment'>Comment</option>
            <option value='music'>Music</option>
            <option value='heart'>Heart</option>
            <option value='paperclip'>Paper Clip</option>
            <option value='file'>File</option>
            <option value='bell'>Bell</option>
            <option value='gift'>Gift</option>
            <option value='film'>Film</option>
            <option value='list'>List</option>
            <option value='key'>Key</option>
            <option value='eye'>Eye</option>
            <option value='wifi'>Wifi</option>
            <option value='book'>Book</option>
            <option value='server'>Server</option>
            <option value='plug'>Plug</option>
            <option value='barcode'>Barcode</option>
            <option value='bolt'>Bolt</option>
            <option value='plane'>Plane</option>
            <option value='car'>Car</option>
            </select>
            <p>Icon Selected: <i className={`fa fa-${icon}`}/></p>
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