import mongoose from "mongoose";

const logindetails=mongoose.Schema({
    username:String,
    email:String,
    password:String,
    resettoken:String,
    followers:[
        {
            userID:{
            type:mongoose.Schema.ObjectId,
            ref:'user'
        }
    }
    ],
    following:[
        {
            userID:{

            type:mongoose.Schema.ObjectId,
            ref:'user'
        }
    }
    ],
    posts:[
        {
         postID: {
            type:mongoose.Schema.ObjectId,
            ref:'post'
        }
    }
    ]
    

})
const logincrediential=mongoose.model('logincrediential',logindetails);
export default logincrediential;