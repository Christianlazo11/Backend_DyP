import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

const app = express();
const PORT = process.env.PORT || 3000;

//Routes
import productsRoutes from "./routes/products.routes";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/v1/products", productsRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

export { app, PORT };
