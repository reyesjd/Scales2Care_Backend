import { Router } from "express";

import { checkConnection } from "../controllers/utility.controller.js";

const router = Router();

router.get("/check-connection", checkConnection);

export default router;
