import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envFile = path.resolve(__dirname, "../.env");

const result = dotenv.config({ path: envFile });

if (result.error) {
  console.error("Failed to load .env file:", result.error.message);
  process.exit(1);
}

const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
if (mongoUri) {
  process.env.MONGO_URI = mongoUri;
  process.env.MONGODB_URI = mongoUri;
}

const requiredVars = [
  "JWT_SECRET",
  "MONGO_URI",
  "CLOUDINARY_NAME",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_SECRET_KEY",
  "RAZORPAY_KEY_ID",
  "RAZORPAY_KEY_SECRET",
  "STRIPE_SECRET_KEY",
  "CURRENCY",
];

const missingVars = requiredVars.filter((key) => {
  const value = process.env[key];
  return !value || value.trim().length === 0;
});

if (missingVars.length > 0) {
  console.error(`Missing required environment variables: ${missingVars.join(", ")}`);
  process.exit(1);
}

console.log(`Loaded environment from ${envFile}`);
