import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
  if (!uri) {
    console.error("Missing MongoDB URI. Please set MONGO_URI in your .env file.");
    process.exit(1);
  }

  if (!/^mongodb(?:\+srv)?:\/\//.test(uri)) {
    console.error("Invalid MongoDB URI format. The URI must start with mongodb:// or mongodb+srv://");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB Error:", error.message || error);
    process.exit(1);
  }
};

export default connectDB;