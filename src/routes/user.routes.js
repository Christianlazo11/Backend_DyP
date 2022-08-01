import { Router } from "express";
import { methods as userController } from "../controllers/user.controller";
const router = Router();

router
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getOneUser)
  .post("/", userController.createdUser)
  .delete("/:id", userController.deletedUser)
  .put("/:id", userController.updatedUser);

export default router;
