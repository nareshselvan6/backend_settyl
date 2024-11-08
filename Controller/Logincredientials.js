import logincrediential from "../Models/Logindetails.js";
import  bcrypt from "bcryptjs";
import { transporter } from "../Services/nodemailer.js";
import dotenv from "dotenv";
import  jwt  from "jsonwebtoken";

dotenv.config();



//! register-user

export const registeruser=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const hashpswd=await bcrypt.hash(password,10);
        const newuser=new logincrediential({username,email,password:hashpswd});
        await newuser.save();
        res.status(200).json({newuser})
        
    } catch (error) {
        res.status(500).send("error occur while registering")
    }
}

//! user login
export const usersignin=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const loginuser=await logincrediential.findOne({email});

        if(!loginuser){
            return res.status(401).send("invalid email");
        }

        const pswrd = await bcrypt.compare(password,loginuser.password);
        
        if(!pswrd){
            return res.status(401).send("invalid password");
        }
        
        //JWT TOKEN

        const user = {email:email};
        // const accesstoken=jwt.sign(user,process.env.JWT_SECRET_KEY,{expiresIn:"1h"});
        const accesstoken=jwt.sign(user,process.env.JWT_SECRET_KEY);
        
        res.status(200).json({message:"login successfully",accesstoken})
        
    } catch (error) {
        res.status(500).send("error occured while sigining in");
        
    }
}


//! forget password

export const forgetpassword=async (req,res)=>{
    const {email}=req.body;

    const user = await logincrediential.findOne({email});

    if(!user){
        return res.status(404).json({message:"User not found"})
      }
// token gen, 
 const tokengen = Math.floor(Math.random(10)*1000)

 // put token db add

const mail={email:user.email};
const token={resettoken:tokengen}

// const newuser=new logincrediential({username,email,password:hashpswd});
const assigntoken = await logincrediential.findOneAndUpdate(mail,token);

// link gen,

const generatedlink=`http://localhost:5173/resetpassword/${user.id}/${tokengen}`



//mail send

const info = await transporter.sendMail({
          from: process.env.PASS_EMAIL,
          to: user.email, 
          subject: "Password Reset", 
          text: "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
          "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
           generatedlink
        });

        res.status(200).send("mail send successfully")

}


// // hash function

// const hashedpswd=async(password)=>{
    
//     return await bcrypt.hash(password,15);
  
// }

//! reset password

export const resetpswd=async(req,res)=>{
 
  try {
    const {password}=req.body;   

    const{id,token}=req.params;

    const resetuserpassword=await logincrediential.findOne({_id:id,resettoken:token});

   
    const hash= await hashedpswd(password)

const newpassword= await logincrediential.findOneAndUpdate(resetuserpassword,{password:hash,resettoken:" "});


    res.status(200).json("Password changed successfully")
    
  } catch (error) {
   
    res.status(500).send("error ocured while reseting password")
  }

}

