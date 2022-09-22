import Staffs from "../../../db/Model/staffSchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
import { verifyTokenPriveledge } from "../../../serviceFunctions/verifyToken";
import Cloudinary from '../../../serviceFunctions/cloudinary';

export const config = {
    api: {
      bodyParser: false,
    },
}

export default async function handler(req,res){
    await dbConnect();

    
    if(req.method==='POST'){
      const verify=await verifyTokenPriveledge(req.cookies.adminPass,'editStaffs')
      if(req.cookies.adminPass !== undefined && verify===true){

        const form = new formidable.IncomingForm();
        const validImagetype=['jpg','JPG','png','PNG','jpeg','JPEG','gif','GIF'];

        form.parse(req,async function(err, fields, files) {
          if (err) throw new Error('Error at Parsing');
          let cloudImg;
          let imgDelete;
          const id=fields.id;

          try{
          if(files.img_link.size!==0){
            imgDelete=await Staffs.findOne({_id:id}).select('img');
            console.log(imgDelete)

            if(!validImagetype.includes(files.img_link.mimetype.split('/')[1],0)) {
            res.status(200).json({status:'Invalid Image Type'});
            return;
            }
            
            cloudImg=await Cloudinary.uploader.upload(files.img_link.filepath);
          }


            
          let staff=fields;
          if(staff.whatsapp) staff.whatsapp=JSON.parse(staff.whatsapp);
          if(staff.dribble) staff.dribble=JSON.parse(staff.dribble);
          if(staff.github) staff.github=JSON.parse(staff.github);
          if(staff.linkedin) staff.linkedin=JSON.parse(staff.linkedin);
          if(staff.twitter) staff.twitter=JSON.parse(staff.twitter);
          if(staff.instagram) staff.instagram=JSON.parse(staff.instagram);
          if(staff.priveldges) staff.priveldges=JSON.parse(staff.priveldges);

          {files.img_link.size===0 ? '' : staff.img={public_id:cloudImg.public_id,url:cloudImg.url}}
          console.log(staff);
          await Staffs.updateOne({_id:id},{$set:staff});
          if(files.img_link.size!==0) await Cloudinary.uploader.destroy(imgDelete.img.public_id);
          res.status(200).json({status:'success'});

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