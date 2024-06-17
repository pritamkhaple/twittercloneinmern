// This is an incorrect usage for frontend
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js';
import tweetRoute from './routes/tweetRoute.js';
import cors from "cors";  // This should not be here for frontend

dotenv.config({ path: ".env" });
databaseConnection();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: "https://twitter-clone-in-mern-frontend.vercel.app",
    methods: ["POST", "GET"],
    credentials: true
};
app.use(cors(corsOptions));

// APIs
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
