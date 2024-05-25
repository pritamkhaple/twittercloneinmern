import express from "express";
import { Login, Logout, Register, bookmarks, follow, getMyProfile, getOtherUsers, unfollow } from "../controllers/userController.js";
import isAunthenticated from "../config/auth.js";

const router  = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAunthenticated,bookmarks)
router.route("/profile/:id").get(isAunthenticated,getMyProfile)
router.route("/otherUser/:id").get(isAunthenticated,getOtherUsers)
router.route("/follow/:id").post(isAunthenticated,follow)
router.route("/unfollow/:id").post(isAunthenticated,unfollow)


export default router;