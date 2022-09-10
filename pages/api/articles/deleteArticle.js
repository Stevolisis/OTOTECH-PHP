import Articles from "../../../db/Model/articleSchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
import path from 'path';
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
        
        
        form.parse(req,async function(err, fields, files) {
          if (err) throw new Error('Error at Parsing');
          console.log(fields);
          let imgDelete=await Articles.findOne({_id:fields.id}).select('img_link');
          console.log(imgDelete)
          let imgPath=path.join(path.resolve('public'),imgDelete.img_link);
          console.log(imgPath);

            try{
            await Articles.deleteOne({id:fields.id});
            // fs.unlinkSync(imgPath);
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