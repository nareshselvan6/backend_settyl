import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema(
    {
      commentText: {
        type: String,
      },
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      postId: {
        type: mongoose.Schema.ObjectId,
        ref: "Post",
        required: true,
      },
      createdAt: {
        type: String,
      },
    },
    { timestamps: true }
  );
  
  const Comment =mongoose.model("Comment", commentsSchema);
  
  export default Comment