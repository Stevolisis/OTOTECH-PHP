import Articles from "../../../db/Model/articleSchema";
import dbConnect from "../../../db/dbConnect";

  
export default async function handler(req,res){
    await dbConnect();

    if(req.method==='GET'){
    // const url = req.headers.referer;
    // let [a,b,c]=url.split('//')[1].split('/');
    const {category,article}=req.query;
    let articleSlug=`/${category}/${article}`
    console.log('articleSluggggg',articleSlug);    



            try{
            let data=await Articles.find({slug:articleSlug,status:'active'}).populate({ path: 'author',select:'full_name description img whatsapp dribble github linkedin twitter instagram' }).lean();

                console.log(data)
                res.status(200).json({data:data,status:'success'});



            }catch(err){
            res.status(404).json({status:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({status:'error'})
          }




}