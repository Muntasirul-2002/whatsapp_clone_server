import { Router } from "express";
import { verifyToken } from "../middleware/AuthMiddleware.js";
import { getAllContacts, getContactsForDMList, search } from "../controller/ContactController.js";

const contactRoutes = Router()

contactRoutes.post("/search", verifyToken, search)
contactRoutes.get("/get-contacts", verifyToken,getContactsForDMList)
contactRoutes.get("/get-all-contacts",verifyToken,getAllContacts)
export default contactRoutes;