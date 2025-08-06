import { Router } from "express";
import { createChannel, getAllChannels, getChannelMessages } from "../controller/ChannelController.js";
import { verifyToken } from "../middleware/AuthMiddleware.js";

const channelRoute = Router()

channelRoute.post("/create-channel", verifyToken, createChannel)
channelRoute.get("/get-users-channels", verifyToken, getAllChannels)
channelRoute.get("/get-channel-messages/:channelId", verifyToken, getChannelMessages)

export default channelRoute