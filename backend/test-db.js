import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const testConnection = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    console.log("Testing connection to:", uri.replace(/:([^:]*):([^@]*)/, ':***:***'));

    await mongoose.connect(uri);
    console.log("✅ MongoDB connected successfully!");
    await mongoose.connection.close();
    console.log("✅ Connection closed successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
  }
};

testConnection();