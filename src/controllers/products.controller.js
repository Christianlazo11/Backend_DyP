import Products from "../models/Products";
import cloudinary from "../services/cloudinary.service";
import multer from "multer";
import fs from "fs";

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Products.find();
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createdProduct = async (req, res) => {
  try {
    const resp = await cloudinary.uploader
      .upload(req.file.path)
      .then((resp) => {
        return resp;
      })
      .catch((err) => {
        err.message;
      });
    fs.unlinkSync(req.file.path);
    const { name, price, category } = req.body;
    const newProduct = new Products({
      name,
      urlImage: resp.url,
      imageId: resp.public_id,
      price,
      category,
    });
    const productSave = await newProduct.save();
    res.status(201).json(productSave);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updatedProduct = async (req, res) => {
  try {
    let data = req.body;
    const { id } = req.params;

    if (req.file) {
      const productUser = await Products.findById(id)
        .then((resp) => resp)
        .catch((err) => console.log(err));
      const resp = await cloudinary.uploader
        .upload(req.file.path)
        .then((resp) => {
          return resp;
        })
        .catch((err) => {
          err.message;
        });

      fs.unlinkSync(req.file.path);
      if (productUser.urlImage) {
        cloudinary.api.delete_resources(productUser.avatar_public_id, function (
          error,
          result
        ) {
          console.log(result, error);
        });
      }
      data = { ...data, urlImage: resp.url, imageId: resp.public_id };
    }
    const product = await Products.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.status(200).json({ message: "Update Ok", data: product });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deletedProduct = async (req, res) => {
  try {
    let result = await Products.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const methods = {
  getAllProducts,
  getOneProduct,
  createdProduct,
  deletedProduct,
  updatedProduct,
};
