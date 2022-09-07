import Article from "../../../db/Model/articleSchema";
import dbConnect from "../../../db/dbConnect";

  
export default async function handler(req,res){
    await dbConnect();
     let route=req.rawHeaders[13].split('//')[1].split('/');

    if(typeof window !=='undefined') console.log(window.location.href);
    console.log(route)

        if(req.method==='GET'){
            try{
            let data=await Article.find({}).populate({ path: 'author',select:'full_name description img_link whatsapp dribble github linkedin twitter instagram' });
               
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