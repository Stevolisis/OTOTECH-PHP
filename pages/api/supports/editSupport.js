import Supports from "../../../db/Model/supportSchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
import { verifyTokenPriveledge } from "../../../serviceFunctions/verifyToken";

export const config = {
    api: {
      bodyParser: false,
    },
}

export default async function handler(req,res){
    await dbConnect();

    if(req.method==='POST'){
      const verify=await verifyTokenPriveledge(req.cookies.adminPass,'editSupportSystem')
      if(req.cookies.adminPass !== undefined && verify===true){

        const form = new formidable.IncomingForm();

        form.parse(req,async function(err, fields, files) {
          if (err) throw new Error('Error at Parsing');


          try{


            
          let support=fields;
          if(support.phone_number) support.phone_number=JSON.parse(support.phone_number);
          if(support.gmail) support.gmail=JSON.parse(support.gmail);
          if(support.whatsapp) support.whatsapp=JSON.parse(support.whatsapp);
          if(support.linkedin) support.linkedin=JSON.parse(support.linkedin);
          if(support.facebook) support.facebook=JSON.parse(support.facebook);
          if(support.google_chat) support.google_chat=JSON.parse(support.google_chat);

          await Supports.updateMany({},{$set:support});
          res.status(200).json({status:'success'});

          }catch(err){
          res.status(404).json({status:err.message})
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