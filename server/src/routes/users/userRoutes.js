import { Router } from "express";
import sendMail from "../../utilities/nodemailer.config.js";


const router = Router();


router.route("/contact").post(sendMail);

export default router;