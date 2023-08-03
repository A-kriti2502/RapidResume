import mongoose from "mongoose";

const personDetailSchema = mongoose.Schema({
  //Personal Detail
  fullName: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
    unique: false,
  },
  email: {
    type: String,
    require: true,
    unique: false,
  },
  country: {
    type: String,
    require: true,
  },
  about: {
    type: String,
  },

  // Work Experience
  companyName: {
    type: String,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },

  //Education
  eName: {
    type: String,
    require: true,
  },
  degreeType: {
    type: String,
    require: true,
  },
  eStartDate: {
    type: Date,
    require: true,
  },
  eEndDate: {
    type: Date,
    require: true,
  },
  eDescription: {
    type: String,
    require: true,
  },
  //Projects
  pTitle: {
    type: String,
    require: true,
  },
  pSkills: {
    type: String,
    require: true,
  },
  pDescription: {
    type: String,
    require: true,
  },
});

export const ResumeData = mongoose.model("resumeInfo",personDetailSchema);