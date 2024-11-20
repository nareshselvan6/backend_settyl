import express from "express"
import dotenv from "dotenv";
import ConnectDB from "./Database/config.js";
import loginrouter from "./Routes/Login.js";
import cors from "cors";
import postrouter from "./Routes/Postroute.js";
import commentrouter from "./Routes/Commentroute.js";


const app=express()


dotenv.config();
app.use(express.json());
// app.use(cors());
app.use(cors())


//DB Connection
ConnectDB()

//Routes
app.use("/logincrediential",loginrouter);
app.use("/postcreation",postrouter);
app.use("/comments",commentrouter);


//Connection
app.get('/',(req,res)=>{
    res.status(200).send("api connection done");
})

// PORT Access
app.listen(process.env.PORT,()=>{
    console.log("app running sucessfully");
})
