import { Router } from "express";

import { userLogin } from "../controllers/user.js";

export const router = Router();

router.post("/userLogin", userLogin);
