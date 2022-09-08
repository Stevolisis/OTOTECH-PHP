import mongoose from 'mongoose';

const likeSchema=new mongoose.Schema({
  page_link:{
    type:String,
    required:true
  },
  pageId:{
    type:String,
    required:true,    
  },
  day:{
    type:String,
    required:true,
    immutable:true
  },
  month:{
    type:String,
    required:true,
    immutable:true
  },
  year:{
    type:String,
    required:true,
    immutable:true
  }
})


//---------------------------------------------------
module.exports=mongoose.models.likes || mongoose.model('likes',likeSchema);
