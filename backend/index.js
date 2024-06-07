import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js';
import tweetRoute from './routes/tweetRoute.js';
import cors from "cors";

// Load environment variables from .env file
dotenv.config({ path: ".env" });

// Establish database connection
databaseConnection();

// Initialize Express app
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
    origin: "https://twitter-clone-in-mern-frontend.vercel.app", // Your frontend URL
    methods: ["POST", "GET", "OPTIONS"], // Methods allowed
    credentials: true, // Allow credentials (cookies)
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    optionsSuccessStatus: 204 // Success status for OPTIONS requests
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Pre-flight OPTIONS request handler for all routes
app.options("*", cors(corsOptions));

// APIs
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
