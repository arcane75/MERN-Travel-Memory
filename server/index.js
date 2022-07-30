import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

//MongoDB URL
const uri =
  "mongodb+srv://arcanerakib:ibphlvYNoM6ZjZbR@cluster0.emvk4y1.mongodb.net/travel_db?retryWrites=true&w=majority";

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
