import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

export const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());    // Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (as sent by HTML forms)    
app.use(express.static('public')); // Serve static files from the public directory

// Load environment variables from .env file
config({ path: './.env' });

console.log("In server.js");
const UrlPrefix = process.env.URL_PREFIX || '/api'; // Set URL prefix for API routes

// app.use(`${UrlPrefix}/user`, userRouter); // Use the router for all API routes

