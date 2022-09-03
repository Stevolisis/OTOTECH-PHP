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
    <td style={{width:'100px',height:'90px',minWidth:'128px'}}>
    <div style={{width:'100%',height:'100%',position:'relative',}}>
    <Image
      src="/OTOTECH8.jpg"
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
        <div style={{overflowX:'auto',whiteSpace:'nowrap'}}>Introduction to Frontend Development</div>
        </td>
    <td>15th June 2022</td>
    <td><Link href='/admin/articles/editArticle/1'><i className='fa fa-edit'/></Link></td>
    <td><button>Delete</button></td>
    <td>Active</td>
</tr>



<tr>
    <td style={{width:'100px',height:'90px',minWidth:'128px'}}>
    <div style={{width:'100%',height:'100%',position:'relative',}}>
    <Image
      src="/OTOTECH7.jpg"
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
        <div style={{overflowX:'auto',whiteSpace:'nowrap'}}>Introduction to Frontend Development</div>
        </td>
    <td>15th June 2022</td>
    <td><Link href='/admin/articles/editArticle/1'><i className='fa fa-edit'/></Link></td>
    <td><button>Delete</button></td>
    <td>Active</td>
</tr>


<tr>
    <td style={{width:'100px',height:'90px',minWidth:'128px'}}>
    <div style={{width:'100%',height:'100%',position:'relative',}}>
    <Image
      src="/OTOTECH6.jpg"
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