import Categories from "../../../db/Model/categorySchema";
import dbConnect from "../../../db/dbConnect";

  
export default async function handler(req,res){
    await dbConnect();
console.log('By Sluuug',req.query)
    if(req.method==='GET'){
        // const url = req.headers.referer;
        // let [a,b]=url.split('//')[1].split('/');
        // let slug=`/${b}`
        let {category}=req.query;
        let slug=`/${category}`

            try{
            let data=await Categories.findOne({slug:slug,status:'active'}).select('name description img');

                res.status(200).json({data:data,status:'success'});


            }catch(err){
            res.status(404).json({status:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({status:'error'})
          }




}