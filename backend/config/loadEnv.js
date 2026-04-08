import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envFile = path.resolve(__dirname, "../.env");

dotenv.config({ path: envFile });

// Sirf do cheezein check karo
const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!mongoUri) {
  console.error("MONGODB_URI missing in .env file");
  console.log("Create .env file with: MONGODB_URI=mongodb://localhost:27017/hospital");
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.warn("⚠️ JWT_SECRET not set, using default (not for production)");
  process.env.JWT_SECRET = "my_default_secret_key";
}

console.log("Environment loaded | MongoDB:", mongoUri.substring(0, 20) + "...");