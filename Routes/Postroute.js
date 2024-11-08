import express from "express";
import {  createpost, deletepost, getpost, updatecomment, updatelike } from "../Controller/PostCollection.js";
import authMiddleware from "../Middleware/MiddlewareAuth.js";

const postrouter =express.Router();

postrouter.post('/createpost',authMiddleware,createpost)
postrouter.put('/updatelike',authMiddleware,updatelike)
postrouter.get('/getpost',authMiddleware,getpost)
postrouter.put('/updatecomment',authMiddleware,updatecomment) 
postrouter.delete('/deletepost',authMiddleware,deletepost)

export default postrouter;