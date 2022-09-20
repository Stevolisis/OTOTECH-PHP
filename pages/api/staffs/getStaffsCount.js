import Staffs from "../../../db/Model/staffSchema";
import dbConnect from "../../../db/dbConnect";

  
export default async function handler(req,res){
    await dbConnect();

    if(req.method==='GET'){

            try{
            let data=await Staffs.count({});
            

            console.log('done')
            res.status(200).json({data:data,status:'success'});

            }catch(err){
            res.status(404).json({status:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({status:'error'})
          }

}