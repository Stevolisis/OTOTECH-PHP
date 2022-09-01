import Link from "next/link";


export default function AdminStaffs(){

    return(
        <>
        
        <div className='mainHeading'>
            <p>Staffs</p>
            <Link href='staffs/addStaff'>ADD</Link>
        </div>





<div className='adminfilterscon'>
<div className='adminfilters'>
        <input type='text' placeholder='Search...'/>
    </div>
    <div className='adminfilters'>
        <select>
        <option defaultValue='All Staff'>Recent Added</option>
        <option>Email</option>
        <option>Position</option>
        <option>Most Posted</option>
        <option>Date</option>
        </select>
    </div>
</div>



<div className='adminstat3con'>
<div className='adminstat3'>
<div className='adminstat3info2'>
<table>





<tbody>

<tr>
<th>Profile Image</th>
<th>Full Name</th>
<th>Email</th>
<th>Position</th>
<th>Opened Date</th>
<th>Edit</th>
<th>Delete</th>
<th>Status</th>
</tr>

<tr>
    <td><img src='/OTOTECH2.jpg'/></td>
    <td>James Miller</td>
    <td>james@gmail.com</td>
    <td>Software Engineer</td>
    <td>12th June 2022</td>
    <td><Link href='/admin/staffs/editStaff/1'><i className='fa fa-edit'/></Link></td>
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