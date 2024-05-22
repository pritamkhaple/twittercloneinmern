import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({
    path:"../config/.env"
})




const isAunthenticated = async (req,res,next) => {
    try {
        const {token} = res.cookies;
        console.log(token);
        if (!token) {
            return res.status(401).json({
                message:"User not authenticated",
                success:false,
            })
        }
        const decode = await jwt.verify(token, process.env.TOKEN_SECRET)
        console.log(decode);
        req.user = decode.id;
        next();
    } catch (error) {
        console.log(error);
    }
}