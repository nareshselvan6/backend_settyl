import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({

    host: "smtp.gmail.com",
    port: 587,
    secure: false,

    service: "Gmail", 
    auth: {
      user: process.env.PASS_EMAIL,
      pass: process.env.PASS_CODE,
    },
  });
  

//   export default async function main() {
   
//     const info = await transporter.sendMail({
//       from: process.env.PASS_EMAIL,
//       to: , 
//       subject: "Password Reset", 
//       text: "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
//       "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
//     });
  
   
//   }
  
//   main().catch(console.error);
  
