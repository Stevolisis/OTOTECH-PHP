
export default function handler({query:{id}},res){
    const categories=[
        {id:1,
        img:'/favicon.io',
        title:'Web Development',
        description:'Topics on web development made available to you for free',
        likes:400
        },
        {id:2,
        img:'/favicon.io',
        title:'Graphics Design',
        description:'Topics on Graphics Design made available to you for free',
        likes:200
        },
        {id:3,
        img:'/favicon.io',
        title:'Copy Writing',
        description:'Topics on Copy Writing made available to you for free',
        likes:300
        },
        {id:4,
        img:'/favicon.io',
        title:'UI/UX',
        description:'Topics on UI/UX made available to you for free',
        likes:60
        }
    ]

    const filter=categories.filter(article=>article.id===parseInt(id))
    if(filter.length!==0){
    res.status(200).json(filter)   
    }else{
        res.status(404).json({message:'Category Not Found'})
    }

}

