import Categories from "../../../db/Model/categorySchema";
import Articles from "../../../db/Model/articleSchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
import cloudinary from '../../../serviceFunctions/cloudinary';
import { verifyTokenPriveledge } from "../../../serviceFunctions/verifyToken";

export const config = {
    api: {
      bodyParser: false,
    },
}

export default async function handler(req,res){
    await dbConnect();

console.log('one done')

    if(req.method==='POST'){
      const verify=await verifyTokenPriveledge(req.cookies.adminPass,'editCategories')

      console.log('two done')

      if(req.cookies.adminPass !== undefined && verify===true){
        const form = new formidable.IncomingForm();
        const validImagetype=['jpg','JPG','png','PNG','jpeg','JPEG','gif','GIF'];

        console.log('three done')

        form.parse(req,async function(err, fields, files) {
          if (err) throw new Error('Error at Parsing');
          let cloudImg;
          let imgDelete;
          const id=fields.id;
          console.log(fields)

          try{
          if(files.img_link.size!==0){
            imgDelete=await Categories.findOne({_id:id}).select('img');
            console.log(imgDelete)

            if(!validImagetype.includes(files.img_link.mimetype.split('/')[1],0)) {
            res.status(200).json({status:'Invalid Image Type'});
            return;
            }
            
            cloudImg=await cloudinary.uploader.upload(files.img_link.filepath);
            let delImg=await cloudinary.uploader.destroy(`${imgDelete.img.public_id}`);
            console.log('imgDel', delImg);
          }


            
          let category=fields;
          
          {files.img_link.size===0 ? '' : category.img={public_id:cloudImg.public_id,url:cloudImg.url}}
          // console.log('gaga',await cloudinary.uploader.upload(files.img_link.filepath));
          // console.log('gaga2',files.img_link);

          await Categories.updateOne({_id:id},{$set:category});

          {category.status==='inactive' ? 
          await Articles.updateMany({category:id},{$set:{status:'inactive'}})
            : await Articles.updateMany({category:id},{$set:{status:'active'}})
          }


          // if(files.img_link.size!==0) await cloudinary.uploader.destroy(imgDelete.img.public_id);

          res.status(200).json({status:'success'});

          }catch(err){
          res.status(404).json({status:err.message})
          console.log(err)
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