import { Router } from "express"; // import express

import { addScaleResult } from "../controllers/scalesResult.controller.js"; // import scalesResult controller

const router = Router(); // create router

router.post("/", addScaleResult); // add scaleResult

export default router; // export router
