import { config } from "dotenv";

config();

export default {
  MONGODB_URI: process.env.MONGODB_URI,
  SECRET: process.env.SECRET_API,
  HOST: process.env.APP_HOST,
};
