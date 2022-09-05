import Categories from "../../../db/Model/categorySchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
import path from "path";
import fs from 'fs';

export const config = {
    api: {
      bodyParser: false,
    },
  }
  
export default async function handler(req,res){
    await dbConnect();
    const validImagetype=['jpg','JPG','png','PNG','jpeg','JPEG','gif','GIF'];
    const expectedFields=['name','slug','desciption','icon','status'];

    const form = new formidable.IncomingForm();
    
    form.parse(req,async function(err, fields, files) {
        if (err) return reject(err);

        if(req.method==='POST'){

           if(files.img_link.size===0){
            res.status(200).json({data:'No Img Link Why Bro?'})
            return;
           } else if(!validImagetype.includes(files.img_link.mimetype.split('/')[1],0)) {
            res.status(200).json({data:'Invalid Image Type'});
            return;
           }
           console.log(fields)



            try{


           
              // for (var i = 0; i < expectedFields.length; i++) {
              //   console.log(fields[`${i}`])
              //   if(fields[`${i}`]===''){
              //     res.status(200).json({data:'Incomplete Fields'});
              //     return;
              //   } 
              // }


              let oldPath=files.img_link.filepath;
              let imgNewName=Date.now()+files.img_link.originalFilename;
              let newPath=path.join(path.resolve('media') ,imgNewName);

                fs.rename(oldPath,newPath,function(err){
                if(err) console.log(err);
              });
 
              
              
             const category=new Categories({
             name:fields.name,
             slug:fields.slug,
             description:fields.description,
             icon:fields.icon,
             img_link:imgNewName,
             status:fields.status
             })
      
             await category.save();
              res.status(200).json({data:'success'})                

             
            }catch(err){
              res.status(404).json({data:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({data:'error'})
          }

      });




}