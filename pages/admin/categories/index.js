import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Swal from "sweetalert2";

export default function AdminCategories(){
    const [categories,setcategories]=useState([]);
    const [backup,setbackup]=useState([]);
    const filterIndex=useRef('');
    const filterCategories=Array.from(categories);
    let limit=useRef(1);
    const months=['January','February','March','April','May','June','July',
  'August','September','October','November','December'];

  function loadCategories(){
    axios.get(`/api/categories/getCategories?limit=${limit.current}`)
    .then(res=>{
        let status=res.data.status;
        let data=res.data.data;

        if(status==='success'){
            setcategories(data);
            setbackup(data);
            
        }else{
            Swal.fire(
                'Error',
                data,
                'error'
            )
        }
    }).catch(err=>{
        Swal.fire(
            'Warning',
            err,
            'error'
        )
        console.log(err)
    })
  }


  function deleteCategory(id){
    console.log(id)
    Swal.fire({
        title: 'Are you sure?',
        text: "Confirm Delete of Comment",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
    axios.post('/api/categories/deleteCategory',{id:id})
    .then(res=>{
       let status=res.data.status;

       if(status==='success'){
        Swal.fire(
            'Successful',
            'Category Deleted',
            'success'
        )
        loadCategories()
       }else{
        Swal.fire(
            'Warning',
            status,
            'error'
        )
       }
    }).catch(err=>{
        Swal.fire(
            'Warning',
            err,
            'error'
        )
    })
}
      });
  }

  function loadLimitCategory(){
    limit.current=limit.current+1;
    loadCategories()
  }

  function filter(e){
    if(e==='ascend'){
        setcategories(filterCategories.sort((a,b)=>a._id < b._id ? 1:-1));
    }else if(e==='articles'){
        setcategories(filterCategories.sort((a,b)=>a.articles < b.articles ? 1:-1));
    }else if(e==='descend'){
        setcategories(filterCategories.sort((a,b)=>a._id < b._id ? -1:1));
    }
  }

function filterByName(e){
    filterIndex.current=e;
    let filterCategories2=[];
    for (let i = 0; i < backup.length; i++) {
    if(backup[i].name.toLowerCase().includes(filterIndex.current.toLowerCase())){
    filterCategories2.push(backup[i]);
    }      
    }
    setcategories(filterCategories2);
}



useEffect(()=>{
    loadCategories();
  },[]);


    return(
        <>
        
        <div className='mainHeading'>
            <p>Categories</p>
            <Link href='categories/addCategory'>ADD</Link>
        </div>





<div className='adminfilterscon'>
<div className='adminfilters'>
        <input type='text' placeholder='Search...'
        onChange={(e)=>{filterByName(e.target.value)}}/>
    </div>
    <div className='adminfilters'>
    <select onChange={(e)=>filter(e.target.value)}>
    <option value='ascend'>Ascending Order</option>
    <option value='descend'>Descending Order</option>
    <option value='articles'>Most Articles</option>
    </select>
    </div>
</div>



<div className='adminstat3con'>
<div className='adminstat3'>
<div className='adminstat3info2'>
<table>





<tbody>

<tr>
<th>Img</th>
<th>Name</th>
<th>icon</th>
<th>no. of Articles</th>
<th>Date</th>
<th>Edit</th>
<th>Delete</th>
<th>Status</th>
</tr>


{filterCategories && filterCategories.map((category,i)=>{
    return(
    <tr key={i}>
    <td style={{width:'100px',height:'90px',minWidth:'128px'}}>
    <div style={{width:'100%',height:'100%',position:'relative',}}>
    <Image
    src={`/${category.img_link}`}
    alt="Picture of the author"
    layout="fill" 
    objectFit="contain"
    placeholder="blur"
    blurDataURL="/favicon.io"
    priority
    />
    </div>
     </td>
    <td>{category.name}</td>
    <td>{category.icon}</td>
    <td>{category.articles}</td>
    <td>{category.day}th {months[category.month]}, {category.year}</td>
    <td><Link href={`/admin/categories/editCategory/${category._id}`}><i className='fa fa-edit'/></Link></td>
    <td><button onClick={()=>deleteCategory(category._id)}>Delete</button></td>
    <td>Active</td>
    </tr>
    )
})}
</tbody>






</table>
</div>
</div>
<div className='adminmorebtn'>
<button onClick={loadLimitCategory}>See More</button>
</div>
</div>

        </>
    )
}