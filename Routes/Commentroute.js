import express from "express";
import { createcomment, deletecomment } from "../Controller/Comment.js";
import authMiddleware from "../Middleware/MiddlewareAuth.js";

const commentrouter =express.Router();

commentrouter.post('/postcomment',authMiddleware,createcomment)
commentrouter.delete('/deletecomment',authMiddleware,deletecomment)

export default commentrouter