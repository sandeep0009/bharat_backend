import { Router } from "express";
import { createFaq } from "./admin_controller";

const router=Router();

router.post('/create-faq',createFaq);

export default router;