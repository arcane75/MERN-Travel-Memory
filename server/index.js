import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));


//MongoDB URL
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.emvk4y1.mongodb.net/?retryWrites=true&w=majority`;

const port = 5000;

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

// app.get("/", (req, res) => {
//   res.send("Welcome");
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

//ibphlvYNoM6ZjZbR
//arcanerakib
