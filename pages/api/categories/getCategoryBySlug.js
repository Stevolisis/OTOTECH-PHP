import Categories from "../../../db/Model/categorySchema";
import dbConnect from "../../../db/dbConnect";

  
export default async function handler(req,res){
    await dbConnect();

    if(req.method==='GET'){
        const url = req.headers.referer;
        let [a,b]=url.split('//')[1].split('/');
        let slug=`/${b}`

            try{
            let data=await Categories.findOne({slug:slug,status:'active'}).select('name description img');
            if(data===null){
                res.status(200).json({status:'not found'});
            }else{
                res.status(200).json({data:data,status:'success'});
            }

            }catch(err){
            res.status(404).json({status:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({status:'error'})
          }




}