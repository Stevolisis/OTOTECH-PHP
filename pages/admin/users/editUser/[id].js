import { useState,useRef } from "react"
import Swal from 'sweetalert2';


export default function EditUser(){


    function handleSubmit(e){
        e.preventDefault();
        Swal.fire(
            'Successful!',
            'User Edited',
            'success'
          )
    }
    


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
            <input type='text' name='full_name'/>
            </div>
        </div>
        
        <div className='admineditnamecon'>
            <div className='admineditname'>
            <p>Email</p>
            <input type='email' name='email'/>
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
        <button >EDIT</button>
        </div>
        </div>
        </form>  
        </>
    )
}