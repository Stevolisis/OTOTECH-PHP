import Staffs from "../../../db/Model/staffSchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
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
        
        
        form.parse(req,async function(err, fields, files) {
          if (err) throw new Error('Error at Parsing');
          console.log(fields);
            try{
              let imgDelete=await Staffs.findOne({_id:fields.id}).select('img');
              console.log(imgDelete)

              await Promise.all([
             Staffs.deleteOne({_id:fields.id}),
             Cloudinary.uploader.destroy(imgDelete.img.public_id)
              ]).then(res.status(200).json({status:'success'}))

            }catch(err){
            res.status(404).json({status:err.message})
            console.log(err.message)
            }

        });


          }else{
              res.status(404).json({status:'error'})
          }




}