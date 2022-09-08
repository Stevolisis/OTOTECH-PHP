import dbConnect from "../../../db/dbConnect";
import Users from '../../../db/Model/userSchema';
import Comments from '../../../db/Model/commentSchema';
import formidable from "formidable";
const jwt=require("jsonwebtoken");
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next'

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
        console.log(fields)
            try{
    
                const userExist=await Users.findOne({email:fields.email});
                let token=jwt.sign({email:fields.email},process.env.JWT_PASS,{expiresIn:60*60*24*30*12});
                let date=new Date();
                console.log('userExist '+userExist);
      
                if(userExist !== null){
                    console.log('userExist2 '+userExist);
                  const comment=new Comments({
                      user:userExist.id,
                      page_link:fields.page_link,
                      pageId:fields.pageId,
                      comment:fields.comment,
                      day:date.getDay(),
                      month:date.getMonth(),
                      year:date.getFullYear()
                  });
      
                  const commentSave=await comment.save();

                  await Promise.all([commentSave]).then(result=>{
                  setCookie('userAuth', token, { req, res, maxAge: 60 * 60 * 24 });
                  res.status(200).json({status:'success'})                    
                  })

                 
                  console.log('User Exist Task Done');
      
      
                }else{
                  const user=new Users({
                      full_name:fields.full_name,
                      email:fields.email,
                      day:date.getDay(),
                      month:date.getMonth(),
                      year:date.getFullYear()
                  });
                  const userSave=await user.save();
                  console.log(userSave);
                  
                  const comment=new Comments({
                      user:userSave.id,
                      page_link:fields.page_link,
                      pageId:fields.pageId,
                      comment:fields.comment,
                      day:date.getDay(),
                      month:date.getMonth(),
                      year:date.getFullYear()
                  });
      
                  
                  const commentSave=await comment.save();
                  await Promise.all([commentSave])
                  .then(result=>{
                      setCookie('userAuth', token, { req, res, maxAge: 60 * 60 * 24 });
                      res.status(200).json({status:'success'})
                  });
                  console.log('User Does Not Exist Task Done');
      
                }
    
          }catch(err){
              res.status(404).json({status:'error',data:err.message})
          }
      

        });
        }else{
        res.status(404).json({status:'Route does not exist'});
        }


}