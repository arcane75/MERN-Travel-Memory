import TourModal from "../models/tour.js";

export const createTour = async (req, res) => {
  const tour = req.body;
  const newTour = new TourModal({
    ...tour,
    createdAt: new Date().toISOString(),
  });

  try {
    await newTour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getTours = async (req, res) => {
  try {
    const tours = await TourModal.find();
    res.status(201).json(tours);
  } catch (err) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
