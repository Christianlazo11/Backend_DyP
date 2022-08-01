import User from "../models/User";

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const oneUser = await User.findById(id);
    res.status(200).json(oneUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createdUser = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    const newUser = new User({ name, lastName, email, password });
    const userSave = await newUser.save();
    res.status(201).json(userSave);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updatedUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(req.body);
    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
    });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deletedUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

export const methods = {
  getAllUsers,
  getOneUser,
  createdUser,
  updatedUser,
  deletedUser,
};
