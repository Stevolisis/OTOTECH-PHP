import Categories from "../../../db/Model/categorySchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
import path from 'path'
import fs from 'fs';
import Cloudinary from '../../../serviceFunctions/cloudinary';

export const config = {
    api: {
      bodyParser: false,
    },
}

export default async function handler(req,res){
    await dbConnect();

    if(req.method==='POST'){
        const form = new formidable.IncomingForm();
        const validImagetype=['jpg','JPG','png','PNG','jpeg','JPEG','gif','GIF'];

        form.parse(req,async function(err, fields, files) {
          if (err) throw new Error('Error at Parsing');
          let cloudImg;
          let imgDelete;
          const id=fields.id;

          try{
          if(files.img_link.size!==0){
            imgDelete=await Categories.findOne({_id:id}).select('img');
            console.log(imgDelete)

            if(!validImagetype.includes(files.img_link.mimetype.split('/')[1],0)) {
            res.status(200).json({status:'Invalid Image Type'});
            return;
            }
            
            cloudImg=await Cloudinary.uploader.upload(files.img_link.filepath);
          }


            
          let category=fields;
          {files.img_link.size===0 ? '' : category.img={public_id:cloudImg.public_id,url:cloudImg.url}}
          console.log(category);
          await Categories.updateOne({_id:id},{$set:category});
          if(files.img_link.size!==0) await Cloudinary.uploader.destroy(imgDelete.img.public_id);
          res.status(200).json({status:'success'});

          }catch(err){
          res.status(404).json({status:err.message})
          console.log(err.message)
          }

        });


          }else{
              res.status(404).json({status:'error'})
          }




}