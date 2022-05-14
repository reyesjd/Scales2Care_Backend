import { Router } from "express";

import {
  checkConnection,
  addError,
  addPqr,
} from "../controllers/utility.controller.js";

const router = Router();

router.get("/check-connection", checkConnection);
router.post("/add-error", addError);
router.post("/add-pqr", addPqr);

export default router;
