import { Router } from "express"; // import expresss

import {
  addScale,
  getScales,
  getScale,
  removeScale,
} from "../controllers/scales.controller.js"; // import scales controller

const router = Router(); // create router

router.post("/", addScale); // add scale
router.get("/", getScales); // get scales
router.get("/:id", getScale); // get scale
router.delete("/:id", removeScale); // remove scale

export default router; // export router
