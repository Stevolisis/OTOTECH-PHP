import Categories from "../../../db/Model/categorySchema";
import Articles from "../../../db/Model/articleSchema";
import dbConnect from "../../../db/dbConnect";

  
export default async function handler(req,res){
    await dbConnect();
    const {limit}=req.query;

        if(req.method==='GET'){
            try{
            let data=await Categories.find({}).select('name icon img_link status day month year').limit(limit).sort({_id:-1}).lean();

            let result=[];
            for (let i = 0; i < data.length; i++) {
                data[i].articles=await Articles.count({category:data[i]._id});
                console.log(data[i].category)
            }
            
            console.log('done')

            res.status(200).json({data:data,status:'success'})
            }catch(err){
            res.status(404).json({status:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({status:'error'})
          }




}