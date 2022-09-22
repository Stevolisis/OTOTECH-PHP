import Articles from "../../../db/Model/articleSchema";
import Likes from "../../../db/Model/likeSchema";
import Comments from "../../../db/Model/commentSchema";
import Views from "../../../db/Model/viewSchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
import Cloudinary from '../../../serviceFunctions/cloudinary';
import { verifyTokenPriveledge } from "../../../serviceFunctions/verifyToken";

export const config = {
    api: {
      bodyParser: false,
    },
}

export default async function handler(req,res){
    await dbConnect();

    if(req.method==='POST'){
      const verify=await verifyTokenPriveledge(req.cookies.adminPass,'deleteArticles')

      if(req.cookies.adminPass !== undefined && verify===true){
        const form = new formidable.IncomingForm();
        
        
        form.parse(req,async function(err, fields, files) {
          if (err) throw new Error('Error at Parsing');
          console.log(fields);


            try{
              let imgDelete=await Articles.findOne({_id:fields.id}).select('img_link');
                          
              await Promise.all([
               Articles.deleteOne({id:fields.id}),
               Likes.deleteOne({pageId:fields.id}),
               Views.deleteOne({pageId:fields.id}),
               Comments.deleteOne({pageId:fields.id}),
               Cloudinary.uploader.destroy(imgDelete.img.public_id)                
              ]).then(res.status(200).json({status:'success'}))


            }catch(err){
            res.status(404).json({status:err.message})
            console.log(err.message)
            }

        });
      }else if(verify==='not Permitted'){
        res.status(200).json({status:'not Permitted'})
      }else{
        res.status(200).json({status:'Invalid User'})
      }

          }else{
              res.status(404).json({status:'error'})
          }




}