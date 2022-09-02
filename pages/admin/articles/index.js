import Link from "next/link";
import Image from 'next/image'

export default function AdminArticles(){

    return(
        <>
        
        <div className='mainHeading'>
            <p>Articles</p>
            <Link href='articles/addArticle'>ADD</Link>
        </div>





<div className='adminfilterscon'>
<div className='adminfilters'>
        <input type='text' placeholder='Search...'/>
    </div>
    <div className='adminfilters'>
    <select>
        <option defaultValue='All Category'>Recent Added</option>
        <option>Most Articles</option>
        <option>Most Viewed</option>
        <option>Most Liked</option>
        <option>Most Commented</option>
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
<th>Date</th>
<th>Edit</th>
<th>Delete</th>
<th>Status</th>
</tr>

<tr>
    {/* <td><img src='/OTOTECH4.jpg'/> */}
    <td>
    {/* <div style={{width:'100px',height:'90px',boxSizing:'border-box !important'}}> */}
    <Image
      src="/OTOTECH4.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
    // sizes="(min-width: 100px) 100px,
    // (min-width: 200px) 200px,
    // 100px"
    objectPosition='relative'
    objectFit={"contain"}
    priority
    />
    {/* </div> */}
     </td>
    <td style={{width:'290px',maxWidth:'290px'}}>
        <div style={{overflowX:'auto',whiteSpace:'nowrap'}}>Introduction to Frontend Development</div>
        </td>
    <td>15th June 2022</td>
    <td><Link href='/admin/articles/editArticle/1'><i className='fa fa-edit'/></Link></td>
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