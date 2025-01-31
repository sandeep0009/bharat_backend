import { Router } from "express";
import { getFaq } from "./faq_controlller";

const router=Router();

router.get('/faq/',getFaq);

export default router;