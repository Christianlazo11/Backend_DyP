import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";

export const login = async (req, res) => {
  const { name, lastName, email, password, roles } = req.body;
  //   console.log(req.body);

  const newUser = new User({
    name,
    lastName,
    email,
    password: await User.encryptPassword(password),
    roles,
  });

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
    expiresIn: 86400, //24 hours
  });
  res.status(200).json({ token: token, savedUser });
};
export const logout = async (req, res) => {
  res.json("Logout");
};
