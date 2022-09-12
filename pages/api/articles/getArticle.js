import Articles from "../../../db/Model/articleSchema";
import dbConnect from "../../../db/dbConnect";

  
export default async function handler(req,res){
    await dbConnect();

    if(req.method==='GET'){
    const url = req.headers.referer;
    let route=url.split('//')[1].split('/');
    console.log(route);    



            try{
            let data=await Articles.find({}).populate({ path: 'author',select:'full_name description img whatsapp dribble github linkedin twitter instagram' });
               
            if(route[2]==='content-creation'){
            res.status(200).json({data:data[0],status:'success'});
            }else if(route[2]==='content-creation2'){
                res.status(200).json({data:data[1],status:'success'});
            }


            }catch(err){
            res.status(404).json({status:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({status:'error'})
          }




}