import express from "express";
import { forgetpassword, registeruser, resetpswd, usersignin } from "../Controller/Logincredientials.js";

const loginrouter =express.Router();

loginrouter.post("/register-user",registeruser);
loginrouter.put("/login-user",usersignin);
loginrouter.put("/resetpassword/:id/:token",resetpswd);
loginrouter.put("/forgetpassword",forgetpassword);



export default loginrouter;