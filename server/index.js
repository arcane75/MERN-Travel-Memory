import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes/user.js";
import tourRouter from "./routes/tour.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

//Routers
app.use("/users", router);
app.use("/tour", tourRouter);
app.get("/", (req, res) => {
  res.send("Welcome");
});

//MongoDB URL
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.emvk4y1.mongodb.net/?retryWrites=true&w=majority`;

//port
const port = 5000;

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//ibphlvYNoM6ZjZbR
//arcanerakib
