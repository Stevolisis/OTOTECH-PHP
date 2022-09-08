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
  priveldges:{
    type:Array,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  whatsapp:{
   status:{
    type:String,
    required:true
   },
   link:String
  },
  dribble:{
    status:{
     type:String,
     required:true
    },
    link:String
   },
  github:{
  status:{
    type:String,
    required:true
  },
  link:String
  },
  linkedin:{
    status:{
     type:String,
     required:true
    },
    link:String
   },
   twitter:{
    status:{
     type:String,
     required:true
    },
    link:String
   },
   instagram:{
    status:{
     type:String,
     required:true
    },
    link:String
   },
  img_link:String,
  status:{
    type:String,
    required:true
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
module.exports=mongoose.models.staffs || mongoose.model('staffs',staffSchema);
