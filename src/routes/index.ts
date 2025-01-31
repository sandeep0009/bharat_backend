import { Router } from "express";
import adminRouter from "../api/admin/admin_route";
import faqRouter from "../api/faq/faq_router";

const router=Router();

router.use(adminRouter);
router.use(faqRouter);

export default router;