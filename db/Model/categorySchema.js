import mongoose from 'mongoose';

const categSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  slug:{
    type:String,
    required:true
  },
  description:{
    type:String,
  },
  icon:{
    type:String,
    required:true
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
module.exports=mongoose.models.categories || mongoose.model('categories',categSchema);
