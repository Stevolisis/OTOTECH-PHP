import mongoose from 'mongoose';

const likeSchema=new mongoose.Schema({
  page_link:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  article:{
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
module.exports=mongoose.models.likes || mongoose.model('likes',likeSchema);
