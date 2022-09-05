import mongoose from 'mongoose';

const articleSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  slug:{
    type:String,
    required:true
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'staffs',
    required:true
  },
  content:{
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
module.exports=mongoose.models.articles || mongoose.model('articles',articleSchema);
