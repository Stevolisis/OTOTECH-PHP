
export default function handler(req,res){
    const categories=[
        {img:'/favicon.io',
        title:'Web Development',
        description:'Topics on web development made available to you for free',
        likes:400
        },
        {img:'/favicon.io',
        title:'Graphics Design',
        description:'Topics on Graphics Design made available to you for free',
        likes:200
        },
        {img:'/favicon.io',
        title:'Copy Writing',
        description:'Topics on Copy Writing made available to you for free',
        likes:300
        },
        {img:'/favicon.io',
        title:'UI/UX',
        description:'Topics on UI/UX made available to you for free',
        likes:60
        }
    ]
    res.status(200).json(categories)
}

