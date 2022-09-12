import Users from "../../../db/Model/userSchema";
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
            await Promise.all([
              Users.deleteOne({_id:fields.id}),
              Comments.deleteOne({user:fields.id})
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