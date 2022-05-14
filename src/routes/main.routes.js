import { Router } from "express";

import user_routes from "./user.routes.js";
import scalesResult_routes from "./scalesResults.routes.js";
import scales_routes from "./scales.routes.js";
import utilities_routes from "./utilities.routes.js";

const router = Router();

router.use("/user", user_routes);
router.use("/scalesResults", scalesResult_routes);
router.use("/scales", scales_routes);
router.use("/utilities", utilities_routes);

export default router;
