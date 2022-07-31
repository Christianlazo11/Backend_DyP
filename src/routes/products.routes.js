import { Router } from "express";
import { methods as productsController } from "../controllers/products.controller";
const router = Router();

router
  .get("/", productsController.getAllProducts)
  .get("/:id", productsController.getOneProduct)
  .post("/", productsController.createdProduct)
  .put("/:id", productsController.updatedProduct)
  .delete("/:id", productsController.deletedProduct);

export default router;
