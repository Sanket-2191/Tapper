import mongoose from "mongoose";

import { DB_NAME } from "../constants.js"

// ATLAS_URI = mongodb + srv://sanketpadole1:Dayc1234@cluster0.csezpgy.mongodb.net
// ATLAS_URI_tail =? retryWrites = true & w=majority & appName=Cluster0

const url = `${process.env.ATLAS_URI}/${DB_NAME}${process.env.ATLAS_URI_tail}`

export const connectDB = async () => {
    try {
        // Connect to the database
        await mongoose.connect(url);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
} 