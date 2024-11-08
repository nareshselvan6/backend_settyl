import mongoose from "mongoose";


const postSchema = new mongoose.Schema({

    postContent: {
      type: String,
    },
  
    // userId: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  
    likes: {
      type: Number,
      default: 0,
    },
    
    title:{
      type:String
    },
  
    comments: [
      {
        commentsid:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        }
      },
    ],
  
    createdAt: {
      type: String,
    }
  
  }, { timestamps: true });
  
  const Post = mongoose.model("Post", postSchema);

  export default Post
  