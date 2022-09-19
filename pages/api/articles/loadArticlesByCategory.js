import Articles from "../../../db/Model/articleSchema";
import Categories from "../../../db/Model/categorySchema";
import dbConnect from "../../../db/dbConnect";
import Likes from '../../../db/Model/likeSchema';
import Views from '../../../db/Model/viewSchema';
import Comments from '../../../db/Model/commentSchema';
  
export default async function handler(req,res){
    await dbConnect();
    const {limit}=req.query;

    if(req.method==='GET'){
        // const url = req.headers.referer;
        // let [a,b]=url.split('//')[1].split('/');
        // let category=`/${b}`
        // console.log('uioiuytrerty',category);
        let {category}=req.query;
        let slug=`/${category}`
          

            try{
            let checkCateg=await Categories.findOne({slug:slug}).select('slug status');
            if(checkCateg&&checkCateg.status==='active'){
            let data=await Articles.find({category:checkCateg.id,status:'active'}).populate({ path: 'author',select:'full_name' }).limit(limit).sort({_id:-1}).lean();
            for (let i = 0; i < data.length; i++) {
                data[i].likes=await Likes.count({pageId:data[i]._id});
                data[i].views=await Views.count({pageId:data[i]._id});
                data[i].comments=await Comments.count({pageId:data[i]._id});
                data[i].description=data[i].content.slice(0,130)+'...';
                console.log(data[i].likes)
                console.log(data[i].views)
                console.log(data[i].comments) 
            }
            res.status(200).json({data:data,status:'success'});
            }else{
                res.status(200).json({status:'not found'});
            }
            

            }catch(err){
            res.status(404).json({status:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({status:'error'})
          }

}