import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// Auth
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);

// Travel
export const createTour = (tourData) => API.post("/tour", tourData);