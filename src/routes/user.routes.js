import { Router } from "express"; // import express

import { createUser } from "../controllers/user.controller.js"; // import user controller

const router = Router(); // create express router

router.post("/", createUser); // create user

export default router; // export router
