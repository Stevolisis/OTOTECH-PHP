import Articles from "../../../db/Model/articleSchema";
import Categories from "../../../db/Model/categorySchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
const url_slugify=require('slugify');
import Cloudinary from '../../../serviceFunctions/cloudinary';
import { verifyTokenPriveledge } from "../../../serviceFunctions/verifyToken";

export const config = {
    api: {
      bodyParser: false,
    },
}
  
export default async function handler(req,res){
    await dbConnect();
    const validImagetype=['jpg','JPG','png','PNG','jpeg','JPEG','gif','GIF'];

        if(req.method==='POST'){

        const verify=await verifyTokenPriveledge(req.cookies.adminPass,'addArticles')

        if(req.cookies.adminPass !== undefined && verify===true){
    const form = new formidable.IncomingForm();
    
    form.parse(req,async function(err, fields, files) {
      if (err) throw new Error('Error at Parsing');



           if(files.img_link.size===0){
            res.status(200).json({status:'No Img Link Why Bro?'})
            return;
           } else if(!validImagetype.includes(files.img_link.mimetype.split('/')[1],0)) {
            res.status(200).json({status:'Invalid Image Type'});
            return;
           }
           console.log(fields.title);


           let date=new Date();
           let slug=fields.title;
           let categorySlug=await Categories.findOne({_id:fields.category}).select('slug');
           let stripSlug=url_slugify(slug.replace(/[^\w\s']|_/g,' ').replaceAll("'",' '));
           let cloudImg;

            try{
              cloudImg=await Cloudinary.uploader.upload(files.img_link.filepath)
              console.log(cloudImg);
              
             const article=new Articles({
             title:fields.title,
             slug:`${categorySlug.slug}/${stripSlug}`,
             category:fields.category,
             author:fields.author,
             content:fields.content,
             img:{public_id:cloudImg.public_id,url:cloudImg.secure_url},
             status:fields.status,
             day:date.getDate(),
             month:date.getMonth(),
             year:date.getFullYear()
             })

             console.log(article)
      
             await article.save();
              res.status(200).json({status:'success'})                

             
            }catch(err){
              await Cloudinary.uploader.destroy(cloudImg.public_id);
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