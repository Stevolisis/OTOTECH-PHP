import mongoose from 'mongoose';

const connection={};

async function dbConnect(){
     mongoose.connect(process.env.db_URL,
        {useNewUrlParser:true,useUnifiedTopology:true},(err,res)=>{
            if (err) {
                console.log("Mongo Err "+err)
            }else{
                console.log('connected1')
                return
            }
    })
}

export default dbConnect;





// mongoose.connect(process.env.db_URL,
// 	{useNewUrlParser:true,useUnifiedTopology:true},(err,res)=>{
// 		if (err) {
// 			console.log("Mongo Err "+err)
// 		}else{


// 		}
// })