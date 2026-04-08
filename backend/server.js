import "./config/loadEnv.js";

import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

// App configuration
const app = express();
const port = Number(process.env.PORT) || 4000;

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

const startServer = async () => {
  try {
    await connectDB();
    connectCloudinary();

    const server = app.listen(port, () => {
      console.log(`Server started on PORT:${port}`);
    });

    server.on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        console.error(`Port ${port} is already in use. Please set a different PORT or free the port.`);
      } else if (error.code === "EACCES") {
        console.error(`Permission denied for port ${port}. Use a higher port or run with proper privileges.`);
      } else {
        console.error("Server error:", error);
      }
      process.exit(1);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message || error);
    process.exit(1);
  }
};

startServer();