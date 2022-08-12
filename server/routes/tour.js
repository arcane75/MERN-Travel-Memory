import express from "express";
const router = express.Router();
import {
  createTour,
  getTour,
  getTours,
  getToursByUser,
} from "../controllers/tour.js";
import auth from "../middleware/auth.js";

router.post("/", auth, createTour);
router.get("/", getTours);
router.get("/:id", getTour);
router.get("/userTours/:id", auth, getToursByUser);

export default router;
