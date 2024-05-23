import express from "express";
import { Login, Logout, Register, bookmarks, getMyProfile } from "../controllers/userController.js";
import isAunthenticated from "../config/auth.js";

const router  = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/bookmark/:id").put(isAunthenticated,bookmarks)
router.route("/profile/:id").get(isAunthenticated,getMyProfile)


export default router;