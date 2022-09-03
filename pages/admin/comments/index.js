import Link from "next/link";
import Swal from 'sweetalert2';

export default function AdminComments(){
  function view(){
    Swal.fire({
        title:'ronda@gmail.com',
        html:'<div className="articleAuthor"><p style="text-size:"2px"">Steven is a Full Stack Developer who has a broad range of experience in creating world class web apps for companies. His an expert in javascript, frameworks like expressJs, Reactjs and NextJs.</p></div>',
        icon:'info',
        confirmButtonText:'Close'
    })

}


    return(
        <>
        
        <div className='mainHeading'>
            <p>Comments</p>
        </div>





<div className='adminfilterscon'>
<div className='adminfilters'>
        <input type='text' placeholder='Search...'/>
    </div>
    <div className='adminfilters'>
        <select>
        <option defaultValue='All Users'>Recent Added</option>
        <option>Email</option>
        <option>Most Comments</option>
        <option>Most Likes</option>
        </select>
    </div>
</div>



<div className='adminstat3con'>
<div className='adminstat3'>
<div className='adminstat3info2'>
<table>





<tbody>

<tr>
<th>Email</th>
<th>comment</th>
<th>Likes</th>
<th>Commented On</th>
<th>Delete</th>
<th>Status</th>
<th>View</th>
</tr>

<tr>
    <td>ronda@gmail.com</td>
    <td>19</td>
    <td>60</td>
    <td>12th June 2022</td>
    <td><button>Delete</button></td>
    <td>Active</td>
    <td><button onClick={view}>
      View</button></td>
</tr>

</tbody>






</table>
</div>
</div>
<div className='adminmorebtn'>
<button>See More</button>
</div>
</div>

        </>
    )
}