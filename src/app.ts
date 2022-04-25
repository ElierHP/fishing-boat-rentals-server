import express, { Request, Response, Application } from "express";
import config from "../config";

const port = config.port as number;
const host = config.host as string;

const app: Application = express();

// Routes
app.use("/", (req: Request, res: Response) => {
  res.send({ hello: "world" });
});

// Config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Listen
app.listen(port, host, () => {
  console.log(`Server listing at http://${host}:${port}`);
});
