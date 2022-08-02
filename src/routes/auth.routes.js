import { Router } from "express";
const router = Router();

import * as authController from "../controllers/auth.controller";

router
  .post("/login", authController.login)
  .post("/logout", authController.logout);

export default router;
