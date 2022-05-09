import { Router } from "express";

import user_routes from "./user.route.js";
import scalesResult_routes from "./scalesResults.route.js";

const router = Router();

router.use("/user", user_routes);
router.use("/scalesResults", scalesResult_routes);

export default router;
