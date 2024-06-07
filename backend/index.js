import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from './routes/userRoute.js';
import tweetRoute from './routes/tweetRoute.js';
import cors from "cors";

// Load environment variables
dotenv.config({ path: ".env" });

// Establish database connection
databaseConnection();

// Initialize Express app
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Debugging Middleware: Log incoming requests
app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});

// CORS Configuration
const corsOptions = {
    origin: "https://twitter-clone-in-mern-frontend.vercel.app", // Allow requests from this origin
    methods: ["POST", "GET", "OPTIONS"], // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies)
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    optionsSuccessStatus: 204 // Response status for OPTIONS requests
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Manually add CORS headers for debugging
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://twitter-clone-in-mern-frontend.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Pre-flight OPTIONS request handler for all routes
app.options("*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://twitter-clone-in-mern-frontend.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    res.sendStatus(204); // Send OK status for preflight
});

// APIs
app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

// Handle errors and send CORS headers
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});
