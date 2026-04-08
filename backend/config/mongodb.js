import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const connectDB = async () => {
  // For development, use in-memory MongoDB if Atlas connection fails
  const useLocalDB = process.env.USE_LOCAL_DB === "true" || !process.env.MONGODB_URI;

  if (useLocalDB) {
    console.log("Using local in-memory MongoDB for development...");
    try {
      const mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      await mongoose.connect(mongoUri);
      console.log("✅ Local MongoDB connected successfully");
      return;
    } catch (error) {
      console.error("❌ Local MongoDB failed:", error.message);
      process.exit(1);
    }
  }

  // Production/Atlas connection
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Missing MongoDB URI. Set MONGODB_URI or USE_LOCAL_DB=true");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB Atlas connected successfully");
  } catch (error) {
    console.error("❌ MongoDB Atlas Error:", error.message);
    console.log("💡 Tip: Set USE_LOCAL_DB=true in .env for local development");
    process.exit(1);
  }
};

export default connectDB;