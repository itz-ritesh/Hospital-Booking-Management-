import mongoose from "mongoose";

const connectDB = async () => {
  // Sirf local development ke liye in-memory DB
  const isDevelopment = process.env.NODE_ENV === "development";
  const useLocalDB = process.env.USE_LOCAL_DB === "true";

  if (isDevelopment && useLocalDB) {
    console.log("Using local in-memory MongoDB for development...");
    try {
      const { MongoMemoryServer } = await import("mongodb-memory-server");
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

  // Production - Render pe Atlas use karega
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ Missing MONGODB_URI environment variable");
    console.log("Please set MONGODB_URI in Render Dashboard → Environment Variables");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB Atlas connected successfully");
  } catch (error) {
    console.error("❌ MongoDB Atlas Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;