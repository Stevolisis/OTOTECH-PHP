import Staffs from "../../../db/Model/staffSchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
import path from "path";
import fs from 'fs';
import bcrypt from 'bcryptjs';

export const config = {
    api: {
      bodyParser: false,
    },
  }
  
export default async function handler(req,res){
    await dbConnect();
    const validImagetype=['jpg','JPG','png','PNG','jpeg','JPEG','gif','GIF'];

    const form = new formidable.IncomingForm();
    
    form.parse(req,async function(err, fields, files) {
        if (err) return err;

        if(req.method==='POST'){

           if(files.img_link.size===0){
            res.status(200).json({data:'No Img Link Why Bro?'})
            return;
           } else if(!validImagetype.includes(files.img_link.mimetype.split('/')[1],0)) {
            res.status(200).json({data:'Invalid Image Type'});
            return;
           }
           console.log(fields)


           let oldPath=files.img_link.filepath;
           let imgNewName=Date.now()+files.img_link.originalFilename;
           let newPath=path.join(path.resolve('public') ,imgNewName);

            try{
              let password=await bcrypt.hash(fields.password,10);

              if(files.size===0){
                imgNewName='';
              }else{
              fs.rename(oldPath,newPath,function(err){
                if(err) console.log(err);
              });                
              }

 
              
              
             const staff=new Staffs({
             full_name:fields.full_name,
             email:fields.email,
             position:fields.position,
             description:fields.description,
             priveldges:JSON.parse(fields.priveldges),
             password:password,
             whatsapp:JSON.parse(fields.whatsapp),
             dribble:JSON.parse(fields.dribble),
             github:JSON.parse(fields.github),
             linkedin:JSON.parse(fields.linkedin),
             twitter:JSON.parse(fields.twitter),
             instagram:JSON.parse(fields.instagram),
             img_link:imgNewName,
             status:fields.status
             })

             console.log(staff)
      
             await staff.save();
              res.status(200).json({status:'success'})                

             
            }catch(err){
              fs.unlinkSync(newPath);
              res.status(404).json({status:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({status:'error'})
          }

      });




}