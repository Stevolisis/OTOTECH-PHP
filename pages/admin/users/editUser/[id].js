import { useRouter } from "next/router";
import { useState,useEffect } from "react"
import Swal from 'sweetalert2';
import axios from "axios";

export default function EditUser(){
    const router=useRouter();
    const {id}=router.query;
    const [full_name,setfull_name]=useState('');
    const [email,setemail]=useState('');


    function loadUser(){
        if(id!==undefined){
        axios.get(`/api/users/getUser/${id}`)
        .then(res=>{
            let data=res.data.data;
            if(res.data.status==='success'){
                setfull_name(data[0].full_name)
                setemail(data[0].email)
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
            text: "Confirm Action On User",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Edit it!'
          }).then((result) => {
            if (result.isConfirmed) {
        const formData=new FormData(e.target);
        formData.append('id',id);
        axios.post('/api/users/editUser/',formData,{withCredentials:true})
        .then(res=>{
            let status=res.data.status;
            if(status==='success'){
                Swal.fire(
                    'Successful!',
                    'User Edited',
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
        loadUser();
    },[id]);



    return(
        <>
        <div className='mainHeading'>
            <p>Edit User</p>
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
            <p>Email</p>
            <input type='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
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