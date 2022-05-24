import { Router } from "express";

import {
  getReportBySphere,
  getReportByScale,
  getScaleResultsByUser,
} from "../controllers/report.controller.js";

const router = Router();

router.get("/sphere", getReportBySphere);
router.get("/scales", getReportByScale);
router.get("/user/:id", getScaleResultsByUser);

export default router;
