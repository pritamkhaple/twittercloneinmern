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
const whitelist = ['https://twitter-clone-in-mern-frontend.vercel.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ["POST", "GET", "OPTIONS"],
  // allowedHeaders: ["Content-Type", "Authorization"],
  allowedHeaders: "*",
  credentials: true
};

// Apply CORS middleware
app.use(cors(corsOptions));

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
