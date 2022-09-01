import Link from "next/link";


export default function AdminUsers(){

    return(
        <>
        
        <div className='mainHeading'>
            <p>Users</p>
            <Link href='users/addUser'>ADD</Link>
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
<th>Full Name</th>
<th>Email</th>
<th>comments</th>
<th>Likes</th>
<th>Account Opened On</th>
<th>Edit</th>
<th>Delete</th>
<th>Status</th>
</tr>

<tr>
    <td>Ronda Rousy</td>
    <td>ronda@gmail.com</td>
    <td>19</td>
    <td>60</td>
    <td>12th June 2022</td>
    <td><Link href='/admin/users/editUser/1'><i className='fa fa-edit'/></Link></td>
    <td><button>Delete</button></td>
    <td>Active</td>
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