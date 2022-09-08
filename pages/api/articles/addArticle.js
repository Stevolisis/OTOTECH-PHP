import Articles from "../../../db/Model/articleSchema";
import Categories from "../../../db/Model/categorySchema";
import dbConnect from "../../../db/dbConnect";
import formidable from "formidable";
import path from "path";
import fs from 'fs';
const url_slugify=require('slugify');

export const config = {
    api: {
      bodyParser: false,
    },
}
  
export default async function handler(req,res){
    await dbConnect();
    const validImagetype=['jpg','JPG','png','PNG','jpeg','JPEG','gif','GIF'];

    const form = new formidable.IncomingForm();
    
    form.parse(req,async function(err, fields, files) {
      if (err) throw new Error('Error at Parsing');

        if(req.method==='POST'){

           if(files.img_link.size===0){
            res.status(200).json({status:'No Img Link Why Bro?'})
            return;
           } else if(!validImagetype.includes(files.img_link.mimetype.split('/')[1],0)) {
            res.status(200).json({status:'Invalid Image Type'});
            return;
           }
           console.log(fields)


           let oldPath=files.img_link.filepath;
           let imgNewName=Date.now()+files.img_link.originalFilename;
           let newPath=path.join(path.resolve('public'),imgNewName);
           let date=new Date();
           let slug=fields.title;
           let categorySlug=await Categories.findOne({_id:fields.category}).select('slug');
           let stripSlug=url_slugify(slug.replace(/[^\w\s']|_/g,' ').replaceAll("'",' '));

            try{

              if(files.size===0){
                imgNewName='';
              }else{
              fs.rename(oldPath,newPath,function(err){
                if(err) throw new Error(err.message);
              });                
              }

 
              
              
             const article=new Articles({
             title:fields.title,
             slug:`${categorySlug.slug}/${stripSlug}`,
             category:fields.category,
             author:fields.author,
             content:fields.content,
             img_link:imgNewName,
             status:fields.status,
             day:date.getDay(),
             month:date.getMonth(),
             year:date.getFullYear()
             })

             console.log(article)
      
             await article.save();
              res.status(200).json({status:'success'})                

             
            }catch(err){
              fs.unlinkSync(newPath);
              res.status(404).json({status:err.message})
            console.log(err.message)
            }

          }else{
              res.status(404).json({status:'error'})
          }

      });




}