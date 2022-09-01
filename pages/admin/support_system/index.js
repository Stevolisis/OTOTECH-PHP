import { useState } from "react"
import Swal from 'sweetalert2';
import { MultiSelect } from "react-multi-select-component";
import Link from 'next/link';

export default function AddSupportSystem(){

    function handleSubmit(e){
        e.preventDefault();
        Swal.fire(
            'Successful!',
            'Staff Added',
            'success'
          )
    }
    

    return(
        <>
        <div className='mainHeading'>
            <p>Support System</p>
        </div>


        <form onSubmit={handleSubmit}>
        <div className='addcategcon'>


            <div className="adminSupportLink">
                <div><Link href='#'><i className="fa fa-phone"/></Link></div>
                <div><Link href='#'><i className="fa fa-envelope"/></Link></div>
                <div><Link href='#'><i className="fa fa-linkedin"/></Link></div>
                <div><Link href='#'><i className="fa fa-whatsapp"/></Link></div>
                <div><Link href='#'><i className="fa fa-facebook"/></Link></div>
                <div><Link href='#'><i className="fa fa-google"/></Link></div>
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
            <p>Phone Number</p>
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
            <p>Gmail Link</p>
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
            <p>LinkedIn Link</p>
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
            <p>Whatsapp Link</p>
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
            <p>Facebook Link</p>
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
            <p>Google Chat Link</p>
            <input type='text' name='facebookLink' />
        </div>
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