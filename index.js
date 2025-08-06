import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/AuthRoute.js";
import contactRoutes from "./routes/ContactRoute.js";
import setupSocket from "./socket.js";
import messagesRoutes from "./routes/MessagesRoutes.js";
import ChannelRoute from "./routes/ChannelRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;
const databaseURL = process.env.DATABASE_URL;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use("/uploads/profiles", express.static("uploads/profiles"));
app.use("/uploads/files", express.static("uploads/files"))

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/messages", messagesRoutes)
app.use("/api/channel", ChannelRoute)
app.get("/", (req, res) => {
  res.send("Welcome to WeCollab Server");
});
const server = app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
setupSocket(server)
mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4 // Use IPv4, skip trying IPv6
}).then(() => {
  console.log("Database connected");
}).catch((error) => {
  console.error("Database connection error:", error);
});
