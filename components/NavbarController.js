import $ from 'jquery';
import { useState } from 'react';

export default function NavbarController(){
    const [navStatus,setnavStatus]=useState(false);

    function navbaring(){
        if(navStatus===false){
            $('.navbar').css('margin-left','0');
        }else{
            $('.navbar').css('margin-left','-80%');
        }
    }
    return(
        <>
        <div className='navbarController' onClick={()=>(setnavStatus(!navStatus),navbaring())}>
          {navStatus===false ? <i className="fa fa-bars"/> : <i className="fa fa-times"/>}  
        </div>
        </>
    )
}