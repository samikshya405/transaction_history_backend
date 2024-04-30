import express from "express";

import "dotenv/config.js";
import cors from "cors";
import morgan from "morgan";
import { connectMongo } from "./src/config/connectMongo.js";
import userDetailRouter from "./src/Router/userDetailRouter.js";
import transactionRouter from "./src/Router/transactionRouter.js";

const app = express();


app.use(cors());

connectMongo();

const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());
//users
app.use("/api/v1/users", userDetailRouter);

//transaction
app.use("/api/v1/transaction", transactionRouter);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("server running in port ", PORT);
});
