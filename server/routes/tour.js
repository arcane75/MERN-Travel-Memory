import express from "express";
const router = express.Router();
import { createTour, getTours } from "../controllers/tour.js";
import auth from "../middleware/auth.js";


router.post("/",auth, createTour);
router.get("/", auth, getTours);

export default router;
