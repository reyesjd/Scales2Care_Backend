import { Router } from "express"; // import express

import {
  addScaleResult,
  getScaleResultsByUser,
} from "../controllers/scalesResult.controller.js"; // import scalesResult controller

const router = Router(); // create router

router.post("/", addScaleResult); // add scaleResult
router.get("/:id", getScaleResultsByUser); // get scaleResults

export default router; // export router
