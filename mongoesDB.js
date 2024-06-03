const express=require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var cors = require('cors')
const app = express();
app.use(cors())
app.options('*', cors())
dotenv.config();



const InitDB=async ()=>{

    if (process.env.SERVER=="LOCAL") {
        mongoose
          .connect(process.env.DB_LOCAL)
        .then(() => {
          console.log("LOCAL Database Connected Successully.");
        })
        .catch((err) => {
          console.log("Database Connected failed ", err);
        });
      } else {
        mongoose.connect(
          `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.3qnwaw3.mongodb.net/`
        )
         .then(() => {
          console.log("REMOTE Database Connected Successully.");
        })
        .catch((err) => {
          console.log("Database Connected Failed ", err);
        });
      }
    
}

module.exports={
    InitDB
}