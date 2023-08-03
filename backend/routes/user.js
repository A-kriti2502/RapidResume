import express from "express";
import {
  register,
  login,
  logout,
  resumeData,
  getMyData,
  experienceData,
  educationData,
  projectData,
} from "../controller/user.js";
import { isAuthenticated } from "../middleware/auth.js";


const router = new express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);

// routes to create data 
router.post("/newData", resumeData);
router.post("/expData", experienceData);
router.post("/eduData", educationData);
router.post("/projData", projectData);

// route to get all data
router.get("/getData", isAuthenticated,getMyData);




export default router;