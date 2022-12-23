import express from "express";
const router=express.Router();
import multer from "multer";

import login from "./login.js";
import signup from "./signup.js";
import acceptExcel from "./contact.js";
//    ======= Authentication Routes =========  //
import uploadFile from "../middleware/uploadFile.js";

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/addContact").post(uploadFile,acceptExcel);


export default router;
