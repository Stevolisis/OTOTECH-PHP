import Articles from "../../../../db/Model/articleSchema";
import dbConnect from "../../../../db/dbConnect";
import formidable from "formidable";
import path from 'path'
import fs from 'fs';

export const config = {
    api: {
      bodyParser: false,
    },
}

export default async function handler(req,res){
    await dbConnect();

    if(req.method==='POST'){
        const form = new formidable.IncomingForm();
        const {id}=req.query;
        const validImagetype=['jpg','JPG','png','PNG','jpeg','JPEG','gif','GIF'];

        form.parse(req,async function(err, fields, files) {
          if (err) throw new Error('Error at Parsing');
          let newPath;
          let imgNewName;
          let imgPath;

          if(files.img_link.size!==0){
            let oldPath=files.img_link.filepath;
            imgNewName=Date.now()+files.img_link.originalFilename;
            newPath=path.join(path.resolve('public'),imgNewName);
            let date=new Date();
            let imgDelete=await Articles.findOne({_id:id}).select('img_link');
            console.log(imgDelete)
            imgPath=path.join(path.resolve('public'),imgDelete.img_link);
            console.log(imgPath);


            if(!validImagetype.includes(files.img_link.mimetype.split('/')[1],0)) {
            res.status(200).json({status:'Invalid Image Type'});
            return;
            }
            
            fs.rename(oldPath,newPath,function(err){
              if(err) throw new Error(err.message);
            });                
          }

          try{
            
          let article=fields;
          {files.img_link.size===0 ? '' : article.img_link=imgNewName}
          console.log(article);
          await Articles.updateOne({_id:id},{$set:article});
          if(files.img_link.size!==0) fs.unlinkSync(imgPath);
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