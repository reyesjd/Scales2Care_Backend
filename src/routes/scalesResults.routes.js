import { Router } from "express"; // import express

import {
  addScaleResult,
  getResults,
} from "../controllers/scalesResult.controller.js"; // import scalesResult controller

const router = Router(); // create router

router.post("/", addScaleResult); // add scaleResult
router.get("/", getResults); // get scaleResults

export default router; // export router
