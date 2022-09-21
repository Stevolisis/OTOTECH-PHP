import dbConnect from "../../../db/dbConnect";
import Staffs from '../../../db/Model/staffSchema';
const jwt=require("jsonwebtoken");
import { getCookie, hasCookie } from 'cookies-next'

export const config = {
    api: {
      bodyParser: false,
    },
}
  
export default async function handler(req,res){
    await dbConnect();

        if(req.method==='GET'){    

            try{
            if(hasCookie('userAuth',{ req, res })){

            let token=getCookie('adminPass', { req, res })
            const verify=jwt.verify(token,process.env.JWT_PASS);
            console.log('Veeeeeerify',verify);
            let data=await Staffs.findOne({email:verify.email}).select('email')
            console.log('Verified Token',data);
            res.status(200).json({status:'success',data:data})

            }else{
                res.status(200).json({status:'Cookie not found'})
            }

    }catch(err){
        res.status(404).json({status:'Error'})   
    }
}

}