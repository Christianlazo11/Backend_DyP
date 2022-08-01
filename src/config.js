import { config } from "dotenv";

config();

export default {
  MONGODB_URI: process.env.MONGODB_URI,
  SECRET: process.env.SECRET_API,
  HOST: process.env.APP_HOST,
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};
