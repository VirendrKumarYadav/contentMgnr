const express= require('express')
const router=express.Router();
const userControler=require("../controller/UserCotroller")




router.post("/register/",userControler.userRegistration)

router.post("/login",userControler.loginUser)


module.exports=router
