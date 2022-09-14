import Link from 'next/link'

export default function CategoryList({categories}) {
    const listing=categories.map((categ,i)=>{
        const {name,slug,description}=categ;
        return(
        <Link href={`${slug}`} key={i}>
        <a className='categoryCon' >
        <div className='categoryIcon'><i className='fa fa-globe'/></div>
        <div className='categoryInfo'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        </a>
        </Link>
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