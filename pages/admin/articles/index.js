import Link from "next/link";
import Image from 'next/image'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AdminArticles(){
    const [articles,setarticles]=useState([]);
    const [backup,setbackup]=useState([]);
    const filterIndex=useRef('');
    const filterArticles=Array.from(articles);
    let limit=useRef(1);
    const months=['January','February','March','April','May','June','July',
  'August','September','October','November','December'];

  function loadArticles(){
    axios.get(`/api/articles/getArticles?limit=${limit.current}`)
    .then(res=>{
        let status=res.data.status;
        let data=res.data.data;

        if(status==='success'){
            setarticles(data);
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


  function deleteArticle(id){
    console.log(id)
    Swal.fire({
        title: 'Are you sure?',
        text: "Confirm Delete of Article",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
    axios.post('/api/articles/deleteArticle',{id:id})
    .then(res=>{
       let status=res.data.status;

       if(status==='success'){
        Swal.fire(
            'Successful',
            'Article Deleted',
            'success'
        )
        loadArticles()
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

  function loadLimitArticle(){
    limit.current=limit.current+1;
    loadArticles()
  }

  function filter(e){
    if(e==='ascend'){
        setarticles(filterArticles.sort((a,b)=>a._id < b._id ? 1:-1));
    }else if(e==='likes'){
        setarticles(filterArticles.sort((a,b)=>a.likes < b.likes ? 1:-1));
    }else if(e==='views'){
        setarticles(filterArticles.sort((a,b)=>a.views < b.views ? 1:-1));
    }else if(e==='comments'){
        setarticles(filterArticles.sort((a,b)=>a.comments < b.comments ? 1:-1));
    }else if(e==='descend'){
        setarticles(filterArticles.sort((a,b)=>a._id < b._id ? -1:1));
    }
  }

function filterByTitle(e){
    filterIndex.current=e;
    let filterArticles2=[];
    for (let i = 0; i < backup.length; i++) {
    if(backup[i].title.toLowerCase().includes(filterIndex.current.toLowerCase())){
    filterArticles2.push(backup[i]);
    }      
    }
    setarticles(filterArticles2);
}



useEffect(()=>{
    loadArticles();
  },[]);



    return(
        <>
        
        <div className='mainHeading'>
            <p>Articles</p>
            <Link href='articles/addArticle'>ADD</Link>
        </div>





<div className='adminfilterscon'>
    <div className='adminfilters'>
        <input type='text' placeholder='Search...'
        onChange={(e)=>{filterByTitle(e.target.value)}}/>
    </div>
    <div className='adminfilters'>
    <select onChange={(e)=>filter(e.target.value)}>
    <option value='ascend'>Ascending Order</option>
    <option value='descend'>Descending Order</option>
    <option value='views'>Most Viewed</option>
    <option value='likes'>Most Liked</option>
    <option value='comments'>Most Commented</option>
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
<th>Title</th>
<th>Author</th>
<th>Likes</th>
<th>Comments</th>
<th>Views</th>
<th>Date</th>
<th>Edit</th>
<th>Delete</th>
<th>Status</th>
</tr>

{filterArticles && filterArticles.map((article,i)=>{
    return(
    <tr key={i}>
    <td style={{width:'100px',height:'90px',minWidth:'128px'}}>
    <div style={{width:'100%',height:'100%',position:'relative',}}>
    <Image
    // loader={'...loading'}
    src={article.img.url}
    alt="Picture of the author"
    layout="fill" 
    objectFit="contain"
    placeholder="blur"
    blurDataURL="/favicon.io"
    priority
    />
    </div>
     </td>
    <td style={{width:'290px',maxWidth:'290px'}}>
        <div style={{overflowX:'auto',whiteSpace:'nowrap'}}>{article.title}</div>
        </td>
    <td>{article.author&&article.author.full_name}</td>
    <td>{article.likes}</td>
    <td>{article.comments}</td>
    <td>{article.views}</td>
    <td>{article.day}th {months[article.month]}, {article.year}</td>
    <td><Link href={`/admin/articles/editArticle/${article._id}`}><i className='fa fa-edit'/></Link></td>
    <td><button onClick={()=>deleteArticle(article._id)}>Delete</button></td>
    <td>{article.status}</td>
    </tr>
    )
})}

</tbody>






</table>
</div>
</div>
<div className='adminmorebtn'>
<button onClick={loadLimitArticle}>See More</button>
</div>
</div>

        </>
    )
}