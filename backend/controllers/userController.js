    import { User } from "../models/userSchema.js";
    import bcryptjs from "bcryptjs";
    import jwt from "jsonwebtoken";

    export const Register = async (req,res) => {
        try {
            const {name, username, email, password} = req.body;
            //basic validatn
            if(!name || !username || !email || !password){
                return res.status(401).json({
                    message:"All fields required.",
                    success:false
                })
            }
            const user = await User.findOne({email});
            if (user) {
                return res.status(401).json({
                    message:"User already exist",
                })
            }

            const hashedPassword = await bcryptjs.hash(password, 16);

            await User.create({
                name,
                username,
                email,
                password :hashedPassword,
            });

            return res.status(201).json({
                message:"Account Successfully Created!!",
                success:true
            })

        } catch (error) {
            console.log(error)
        }
    }

    export const Login = async (req,res) => {
        try {
            const {email,password} = req.body;
            if(!email || !password){
                return res.status(401).json({
                    message:"All fields required.",
                    success:false
                })
            };
            const user = await User.findOne ({email});
            if (!user){
                return res.status(401).json({
                    message:"Incorrest email or password",
                    success:false
                })
            }
            const isMatch = await bcryptjs.compare(password, user.password);
            if (!isMatch){
                return res.status(401).json({
                    message:"Incorrest email or password",
                    success:false
                })
            }
            const tokendata = {
                userId:user._id
            }
            const token = await jwt.sign(tokendata, process.env.TOKEN_SECRET,{expiresIn:"1d"})
            return res.status(201).cookie("token",token,{expiresIn:"1d",httpOnly:true}).json({
                message:`Welcome Back ${user.name}`,
                success:true,
            })
        } catch (error) {
            console.log(error)
        }
    }


    export const Logout = (req,res) => {
        return res.cookie("token", "",{expiresIn:new Date (Date.now())}).json({
            message:"user logged out succesfully",
            success:true
        })
    }

    export const bookmarks = async (req, res) => {
        try {
            const loggedInUserId = req.body.id;
            const tweetId = req.params.id;
            const user = await User.findById(loggedInUserId);
            if (user.bookmarks.includes(tweetId)) {
                // remove
                await User.findByIdAndUpdate(loggedInUserId, { $pull: { bookmarks: tweetId } });
                return res.status(200).json({
                    message: "Removed from bookmarks."
                });
            } else {
                // bookmark
                await User.findByIdAndUpdate(loggedInUserId, { $push: { bookmarks: tweetId } });
                return res.status(200).json({
                    message: "Saved to bookmarks."
                });
            }
        } catch (error) {
            console.log(error);
        }
    };


    export const getMyProfile = async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findById(id).select("-password");  //we added passwrod also coz we dont wanted users password
            return res.status(200).json({
                user,
            })
        } catch (error) {
            console.log(error)
        }
    }