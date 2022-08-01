import Products from "../models/Products";

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
    const { name, urlImage, price, category } = req.body;
    const newProduct = new Products({ name, urlImage, price, category });
    const productSave = await newProduct.save();
    res.status(201).json(productSave);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updatedProduct = async (req, res) => {
  try {
    const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(product);
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
