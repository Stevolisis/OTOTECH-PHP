import mongoose from 'mongoose';

const staffSchema=new mongoose.Schema({
  full_name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  position:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  sociakLinks:{

  },
  img_link:String,
  status:{
    type:String,
    required:true
  },
  createdAt:{
  type:Date,
  default:()=>Date.now(),
  required:true,
  immutable:true
  },
  updatedAt:{
  type:Date,
    default:()=>Date.now(),
    required:true,  
  }
})


//---------------------------------------------------
module.exports=mongoose.models.staffs || mongoose.model('staffs',staffSchema);
