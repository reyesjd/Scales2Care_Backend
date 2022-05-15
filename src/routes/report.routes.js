import { Router } from "express";

import { getReportBySphere } from "../controllers/report.controller.js";

const router = Router();

router.get("/sphere", getReportBySphere);

export default router;
