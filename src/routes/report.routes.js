import { Router } from "express";

import {
  getReportBySphere,
  getReportByScale,
} from "../controllers/report.controller.js";

const router = Router();

router.get("/sphere", getReportBySphere);
router.get("/scales", getReportByScale);

export default router;
