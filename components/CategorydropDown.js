import $ from 'jquery';
import { useState } from 'react';

export default function CategorydropDown(){
    const [slideStatus,setslideStatus]=useState(false);

    function sliding(){
        setslideStatus(!slideStatus);
        if (slideStatus===false) {
            $('.filterCon2').css('display','flex');
            $('.filterCon2').css('margin-top','0');
        } else {
            $('.filterCon2').css('display','none');
            $('.filterCon2').css('margin-top','-100%');
        }
    }

    return(
        <>
        <div className="categoriesCon">
        <p>Categories</p>
        {
        slideStatus===false ? <i className="fa fa-arrow-down" onClick={sliding}/> 
        :
        <i className="fa fa-arrow-up" onClick={sliding}/>
        }
        </div>
        </>
    )
}