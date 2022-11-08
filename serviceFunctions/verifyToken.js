import jwt from "jsonwebtoken";
import Staffs from '../db/Model/staffSchema';

async function verifyTokenPriveledge(cookie,priveledgeKey){

    try{
        const verify=jwt.verify(cookie,process.env.JWT_PASS);
        const staff=await Staffs.findOne({email:verify.email,status:'active'}).select('email priveldges');
        
if(staff&&priveledgeKey==='editStaffs'&&verify.email===staff.email){
    return true
}else{
         if(staff){
      const obj=staff.priveldges.find(j=>j.value===priveledgeKey);
      if(obj){
        return true;
      }else{
        return 'not Permitted'
      }


        }else{
            console.log(!staff)
            return 'not Permitted';
        }   
}

        
    }catch(err){
        return false
    }
    

}

export  {verifyTokenPriveledge};