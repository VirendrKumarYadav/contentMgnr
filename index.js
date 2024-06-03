const express=require("express")
const app=express();
const routes=require("./router/router")
const mongoesDB = require("./mongoesDB")
const productRouter=require("./router/productRouter")
const userRouter=require("./router/userRouter")
var cors = require('cors')
const dotenv = require("dotenv");
app.use(cors())
app.options('*', cors())
dotenv.config();


mongoesDB.InitDB();
app.use(express.json());
app.use("/api/v1/",productRouter);
app.use("/api/v1/", routes);
app.use("/api/v1/user",userRouter)

app.listen(process.env.PORT, () => { console.log('listening on '+process.env.PORT)})