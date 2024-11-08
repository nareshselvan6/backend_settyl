import jwt from 'jsonwebtoken'
import logincrediential from '../Models/Logindetails.js';
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = async(req,res,next)=>{
     const token = req.headers.authorization?.split(' ')[1]  // bearer token

     if(!token){
        return res.status(401).json({message:"Token not found"})
     }
     try {
        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)

        
        req.logincrediential = decode


        const user = await logincrediential.findOne({email:decode.email})

        if(!user){
               return res.status(401).json({message:"Access Denied Not a valid user"})
        }


       next()
     } catch (error) {
        res.status(500).json({message:"Invalid Token Internal Server Error"})
     }
}

export default authMiddleware;