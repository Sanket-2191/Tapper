import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { config } from 'dotenv';


import { connectDB } from './db/index.js';

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());    // Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies (as sent by HTML forms)    
app.use(express.static('public')); // Serve static files from the public directory

// Load environment variables from .env file
config({ path: './.env' });