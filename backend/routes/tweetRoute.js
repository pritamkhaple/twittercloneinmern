import express from "express";
import { createTweet, deleteTweet, getAllTweets, getFollowingTweets, likeOrDislike } from "../controllers/tweetController.js";
import isAunthenticated from "../config/auth.js";

const router  = express.Router();

router.route("/create").post(isAunthenticated,createTweet);
router.route("/create").post(isAunthenticated,createTweet);
router.route("/delete/:id").delete(isAunthenticated,deleteTweet);
router.route("/like/:id").put(isAunthenticated,likeOrDislike)
router.route("/allTweets/:id").get(isAunthenticated,getAllTweets)
router.route("/followingtweets/:id").get(isAunthenticated,getFollowingTweets)



export default router;