import { Router } from "express"; // import expresss

import { getScales, getScale } from "../controllers/scales.controller.js"; // import scales controller

const router = Router(); // create router

router.get("/", getScales); // get scales
router.get("/:id", getScale); // get scale

export default router; // export router
