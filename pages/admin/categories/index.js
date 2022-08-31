import Link from "next/link";


export default function AdminCategories(){

    return(
        <>
        
<div className='mainBody'>
        <div className='mainHeading'>
            <p>Categories</p>
            <Link href='categories/addCategory'>ADD</Link>
        </div>




<div className='admincategcon'>

<div className='adminfilterscon'>
<div className='adminfilters'>
        <input type='text' placeholder='Search...'/>
    </div>
    <div className='adminfilters'>
        <select>
        <option defaultValue='All Category'>All Category</option>
        <option>Phones</option>
        <option>Shirts</option>
        <option>Home Appliances</option>
        <option>Underwears</option>
        </select>
        <select>
        <option defaultValue='All Category'>Recent Added</option>
        <option>High product</option>
        <option>Desc</option>
        <option>Home Appliances</option>
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
<th>Slug</th>
<th>icon</th>
<th>Date</th>
<th>Edit</th>
<th>Delete</th>
<th>Status</th>
</tr>

<tr>
    <td><img src='/OTOTECH11.jpg'/></td>
    <td>Engineering</td>
    <td>engineering</td>
    <td>globe</td>
    <td>12th June 2022</td>
    <td><Link href='/admin/categories/editCategory'><i className='fa fa-edit'/></Link></td>
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

</div>
</div>
        </>
    )
}