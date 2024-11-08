import logincrediential from "../Models/Logindetails.js";
import Post from "../Models/Postcollections.js";


// Post

export const createpost = async (req, res) => {
    try {

      const value=req.body
      
      const { title ,content}=value
      
      const creatingpost = new Post({ postContent: content ,title:title});
      await creatingpost.save();
      // const userUpdate = await User.findOneAndUpdate({_id: userId}, {$push: {posts: {postId: post._id}}})

      res.status(200).json({ creatingpost });
      
    } catch (error) {
      console.log(error);
      res.status(500).send("error occurred while posting");
    }
  };
  
// Put for likes

export const updatelike=async(req,res)=>{

try {
    const {count,postid} = req.body
    // console.log(count,userid);
    const likeupdate= await Post.findOneAndUpdate({_id:postid},{likes:count})
    res.status(200).json({likeupdate})
    
} catch (error) {
    console.log(error);
    res.status(500).send("error occured while updating likes")
}

}

// Put for comments
export const updatecomment=async(req,res)=>{

    try {
        const {comment,postid} = req.body
        // console.log(count,userid);
        const commentupdate= await Post.findOneAndUpdate({_id:postid},{comments:comment})
        res.status(200).json({commentupdate})
        
    } catch (error) {
        console.log(error);
        res.status(500).send("error occured while updating comments")
    }
    
    }

// Get npm run dev
export const getpost=async(req,res)=>{
  try {
    const postget=await Post.find()    
    res.status(200).json({postget})
    
  } catch (error) {
    console.log(error);
    res.status(500).send("error while getting the post")
    
  }

}


// Delete

export const deletepost=async(req,res)=>{

  try {
    const {userid}=req.body
    const postdelete= await Post.deleteOne({_id:userid})
    res.status(200).send("post deleted successfully")

  } catch (error) {
    console.log(error);
    res.status(500).send("error occured while delete post")
  }

}


