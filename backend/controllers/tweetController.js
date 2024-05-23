import { Tweet } from "../models/tweetSchema.js";

export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description || !id) {
      return res.status(401).json({
        message: "All Fields are required.",
        success: false,
      });
    }
    await Tweet.create({
      description,
      userId: id,
    });
    return res.status(201).json({
      message: "Tweet created succesfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTweet = async (req,res) => {
  try {
    const {id} = req.params;
    await Tweet.findByIdAndDelete (id);
    return res.status(200).json({
      message:"tweet deleted succesfully.",
      success:true,
    })
  } catch (error) {
    console.log(error)
    
  }
}

export const likeOrDislike = async (req,res) => {
  try {
    const loggedInUserId = req.body.id;
    const tweetId = req.params.id;
    const tweet = await Tweet.findById(tweetId);
    if (tweet.like.includes(loggedInUserId)) {
      //dislike
      await Tweet.findByIdAndUpdate(tweetId, {$pull:{like:loggedInUserId}});
      return res.status(200).json({
        message:"user disliked your tweet buddy"
      })
    }else{
      //like
      await Tweet.findByIdAndUpdate(tweetId, {$push:{like:loggedInUserId}})
      return res.status(200).json({
        message:"User liked your tweet buddy, keep tweeting"
      })
    }

  } catch (error) {
    console.log(error)
  }
}

