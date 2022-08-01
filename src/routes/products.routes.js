import { Router } from "express";
import { methods as productsController } from "../controllers/products.controller";
const router = Router();
import cloudinary from "../services/cloudinary.service";
import upload from "../services/multer.service";

router
  .get("/", productsController.getAllProducts)
  .get("/:id", productsController.getOneProduct)
  .post("/", upload.single("img"), productsController.createdProduct)
  .put("/:id", productsController.updatedProduct)
  .delete("/:id", productsController.deletedProduct)
  .post("/uploadImage", upload.single("avatar"), (req, res) => {
    cloudinary.uploader
      .upload(req.file.path)
      .then((resp) => {
        // return resp.url;
        console.log(resp.url);
      })
      .catch((err) => {
        console.log(err.message);
      });

    res.send("Uploading Image...");
  });

export default router;
