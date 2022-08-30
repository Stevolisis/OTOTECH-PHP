import Link from "next/link";


export default function AdminCategories(){

    return(
        <>
        <div className='mainHeading'>
            <p>Categories</p>
            <Link href='addCategory'>ADD</Link>
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











</table>
</div>
</div>
<div className='adminmorebtn'>
<button>See More</button>
</div>
</div>

</div>
        </>
    )
}