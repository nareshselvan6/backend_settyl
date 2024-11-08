import Comment from "../Models/Comment.js";



// Post 

export const createcomment = async (req, res) => {
try {
    const {commentText,userId,postId} =req.body

    const commentcreate= new Comment({commentText,userId,postId})
    await commentcreate.save()

    res.status(200).json({commentcreate})
    
    
} catch (error) {
    console.log(error);
    res.status(500).send("error occured while crreating comment")    
    
}

}


// Delete

export const deletecomment=async(req,res)=>{

    try {
      const {userid}=req.body
      const commentdelete= await Comment.deleteOne({_id:userid})
      res.status(200).send("comment deleted successfully")
  
    } catch (error) {
      console.log(error);
      res.status(500).send("error occured while delete comment")
    }
  
  }