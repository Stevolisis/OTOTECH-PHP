import Articles from "../../../db/Model/articleSchema";
import dbConnect from "../../../db/dbConnect";
import Likes from '../../../db/Model/likeSchema';
import Views from '../../../db/Model/viewSchema';
import Comments from '../../../db/Model/commentSchema';
  
export default async function handler(req,res){
    await dbConnect();
    const {limit}=req.query;

    if(req.method==='GET'){

            try{
            let data=await Articles.find({}).populate({ path: 'author',select:'full_name' }).limit(limit).sort({_id:-1}).lean();
            
            let result=[];
            for (let i = 0; i < data.length; i++) {
                // data[i].Views=Articles.getViews('3456789')   
                data[i].likes=await Likes.count({pageId:data[i]._id});
                data[i].views=await Views.count({pageId:data[i]._id});
                data[i].comments=await Comments.count({pageId:data[i]._id});
                console.log(data[i].likes)
                console.log(data[i].views)
                console.log(data[i].comments) 
            }
            
            console.log('done')
            res.status(200).json({data:data,status:'success'});

            }catch(err){
            res.status(404).json({status:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({status:'error'})
          }

}