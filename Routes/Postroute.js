import express from "express";
import {  createpost, deletepost, getpost, updatecomment, updatelike } from "../Controller/PostCollection.js";

const postrouter =express.Router();

postrouter.post('/createpost',createpost)
postrouter.put('/updatelike',updatelike)
postrouter.get('/getpost',getpost)
postrouter.put('/updatecomment',updatecomment) 
postrouter.delete('/deletepost',deletepost)

export default postrouter;