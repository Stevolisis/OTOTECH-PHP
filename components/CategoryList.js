import Link from 'next/link'

export default function CategoryList({categories}) {
    const listing=categories.map((categ,i)=>{
        const {name,author,description,day,month,year}=categ;
        return(
            <>
        <Link href='/enginneering'><a className='categoryCon'>
          <div className='categoryIcon'><i className='fa fa-globe'/></div>
          <div className='categoryInfo'>
            <h2>Enginneering</h2>
            <p>Explore in-depth developer tutorials and new technology 
              announcements created by professional engineers in the Toptal 
              network. Read engineering articles</p>
          </div>
          </a>
        </Link>   
        <Link href='/enginneering'><a className='categoryCon'>
        <div className='categoryIcon'><i className='fa fa-globe'/></div>
        <div className='categoryInfo'>
            <h2>Enginneering</h2>
            <p>Explore in-depth developer tutorials and new technology 
            announcements created by professional engineers in the Toptal 
            network. Read engineering articles</p>
        </div>
        </a>
        </Link>     
                <Link href='/enginneering'><a className='categoryCon'>
                <div className='categoryIcon'><i className='fa fa-globe'/></div>
                <div className='categoryInfo'>
                <h2>Enginneering</h2>
                <p>Explore in-depth developer tutorials and new technology 
                    announcements created by professional engineers in the Toptal 
                    network. Read engineering articles</p>
                </div>
                </a>
            </Link>    
            </> 

        )
    })

    return(
        <>
        <div className='categoriesCon2'>
        <div className='categories'>
            {listing}
        </div>
      </div>
        </>
    )
}