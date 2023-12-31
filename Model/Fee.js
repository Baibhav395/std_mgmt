const mongoose=require('mongoose')
const feeSchema=new mongoose.Schema({
    Fee_studentId:{
        type:String,
        required:true,
    },
    Fee_studentId:{
        type:String,
        required:true,
    },
    Fee_courseId:{
        type:String,
        required:true,
    },
    Fee_fullpay:{
        type:String,
        required:true,
    },
    Fee_installement:[
        {
          paydate:{
            type:String,
          },
          paydue:{
            type:String,
          }
        }
    ],
        
},{timestamps:true})
module.exports=mongoose.model('Fee',feeSchema)