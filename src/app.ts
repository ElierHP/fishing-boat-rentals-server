import express, { Application } from "express";
import config from "../config";
import productRoutes from "./route/product.route";
import mongoose from "mongoose";
import cors from "cors";

const port = config.port as number;
const host = config.host as string;
const db = config.dbUri as string;

const app: Application = express();

// Connect Mongoose
mongoose
  .connect(db)
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error));

// Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/products", productRoutes);

// Listen
app.listen(port, host, () => {
  console.log(`Server listing at http://${host}:${port}`);
});
