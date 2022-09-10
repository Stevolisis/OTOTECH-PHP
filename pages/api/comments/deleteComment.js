import Comments from "../../../db/Model/commentSchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";

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
            let data=await Comments.deleteOne({id:fields.id});
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