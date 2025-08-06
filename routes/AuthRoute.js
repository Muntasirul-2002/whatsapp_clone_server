import { Router } from "express";
import {
  addProfileImage,
  login,
  logout,
  removeProfileImage,
  signup,
  updateProfile,
  userInfo,
} from "../controller/AuthController.js";
import { verifyToken } from "../middleware/AuthMiddleware.js";
import multer from "multer";
const authRoutes = Router();
const upload = multer({ dest: "uploads/profiles/" });
authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.get("/user-info", verifyToken, userInfo);
authRoutes.post("/update-profile", verifyToken, updateProfile);
authRoutes.post(
  "/add-profile-image",
  verifyToken,
  upload.single("profile-image"),
  addProfileImage
);
authRoutes.delete("/remove-profile-image", verifyToken, removeProfileImage)
authRoutes.post("/logout", logout)
export default authRoutes;
