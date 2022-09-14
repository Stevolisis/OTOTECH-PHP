import dbConnect from "../../../db/dbConnect";
import Users from '../../../db/Model/userSchema';
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

        if(req.method==='GET'){    
        const form = new formidable.IncomingForm();
        form.parse(req,async function(err, fields, files) {
        if (err) throw new Error('Error at Parsing'); 
        // console.log(req.header.cookie||'not found');
        console.log('haaaaaaaland',getCookie('userAuth', { req, res }));
        res.status(200).json({status:'sucess'})
        });

    }

}