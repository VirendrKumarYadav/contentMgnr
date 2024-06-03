const mongoose = require("mongoose");


const UserModal={

   username:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
   },
   password:{
    type:String,
    required:true,
   }

}

module.exports=mongoose.model("user", UserModal);