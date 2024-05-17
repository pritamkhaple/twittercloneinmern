import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config({
    path:"../config/.env"
})

const databaseConnection = () => {
    mongoose.ConnectionStates(procces.env.MONGO_URI).then(()=> {
        console.log("connnected to Mongodb");
    }).catch((error) => {
        console.log(error);
    })
}

export default databaseConnection;