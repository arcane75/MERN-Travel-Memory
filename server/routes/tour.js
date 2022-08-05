import express from "express";
const router = express.Router();
import { createTour, getTours } from "../controllers/tour.js";
import auth from "../middleware/auth.js";

router.get("/", auth, getTours);
router.post("/", createTour);

export default router;
