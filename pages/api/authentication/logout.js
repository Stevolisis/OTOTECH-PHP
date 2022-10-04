import dbConnect from "../../../db/dbConnect";
import { verifyTokenPriveledge } from "../../../serviceFunctions/verifyToken";
import {deleteCookie } from 'cookies-next';

export const config = {
    api: {
      bodyParser: false,
    },
}

export default async function handler(req,res){
    await dbConnect();



    if(req.method==='GET'){
      const verify=await verifyTokenPriveledge(req.cookies.adminPass,'logout')

      if(req.cookies.adminPass !== undefined && verify===true){

        deleteCookie('adminPass');
        res.status(200).json({status:'success'});

      }else if(verify==='not Permitted'){
        res.status(200).json({status:'not Permitted'})
      }else{
        res.status(200).json({status:'Invalid User'})
      }
          
    }else{
        res.status(404).json({status:'error'})
    }


}