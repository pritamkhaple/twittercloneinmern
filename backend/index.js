// Import necessary modules
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js';
import tweetRoute from './routes/tweetRoute.js';
import cors from "cors";

// Load environment variables
dotenv.config({ path: ".env" });

// Connect to the database
databaseConnection();

// Initialize Express app
const app = express();

// Middleware to set CORS headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://twitter-clone-in-mern-frontend.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
});

// Other middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// CORS Configuration for specific routes (if needed)
const corsOptions = {
    origin: "https://twitter-clone-in-mern-frontend.vercel.app",
    methods: ["POST", "GET"],
    credentials: true
};
app.use(cors(corsOptions));

// APIs
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
