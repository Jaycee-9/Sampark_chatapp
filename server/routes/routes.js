import { Router } from "express";

import { userLogin, getchats } from "../controllers/user.js";

export const router = Router();

router.post("/userLogin", userLogin);

router.get("/getchats", getchats);
