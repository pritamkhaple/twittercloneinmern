import { User } from "../models/userSchema";
import bcryptjs from "bcryptjs";

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
        const user = await User.findOne(email);
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