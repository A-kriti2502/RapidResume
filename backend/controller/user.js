// All The Details will be their, all the apis including the all the pages of website
import bcrypt from "bcrypt";
import { User } from "../models/user.js ";
import { sendCookie } from "../utils/features.js";
import { ResumeData } from "../models/personDetail.js"
import ErrorHandler from "../middleware/error.js";

//Login API
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    //Handling error using Error hander class
    if (!user) return NextAuth(new ErrorHandler("Invalid Email or Password"));

    const isMatch = await bcrypt.compare(password, user.password);

    //Handling error using Error hander class
    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Password", 404));

    sendCookie(user, res, `Welcome Back",${user.firstName}`, 200);
  } catch (error) {
    console.log(error);
  }
};

// REGISTER API
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    let user = await User.findOne({ email });

    // if (user)
    //   // if user exist than
    //   return res.status(404).json({
    //     success: false,
    //     message: "User Alredy Exist",
    //   });

    //above using error handler class
    if (user) return next(new ErrorHandler("User Alredy Exist", 400));

    //hasing password
    const hashedPassword = await bcrypt.hash(password, 10);

    //else create one
    user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    //Features
    sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", {
      expire: new Date(Date.now()),
    })
    .json({
      success: true,
      user: req.user,
    });
};


//API to to create Personal Details

export const resumeData = async (req, res) => {
  try {
    const {
      fullName,
      role,
      phoneNumber,
      email,
      country,
      about,


    } = req.body;


    let UserData = await ResumeData.create({
      fullName,
      role,
      phoneNumber,
      email,
      country,
      about,


    });

    //New WAY
    let result;
    async () => {
      result = await UserData.save();
    };

    res.status(201).json({
      success: true,
      messsage: "User Personal Infomation Added Successfully",
    })
  } catch (error) {
    console.log(error)
  }

};

//API to to create Experience Details
export const experienceData = async (req, res) => {
  const { companyName, position, startDate, endDate, description } = req.body;

  let expData = await ResumeData.create({
    companyName,
    position,
    startDate,
    endDate,
    description,
  });
  let result;
  async () => {
    result = await expData.save();
  };

  res.status(201).json({
    success: true,
    messsage: "Experience Infomation Added Successfully",
  });
}


// API to to create Education Details
export const educationData = async (req, res) => {

  const { eName, degreeType, eStartDate, eEndDate, eDescription } = req.body;

  let eduData = await ResumeData.create({
    eName,
    degreeType,
    eStartDate,
    eEndDate,
    eDescription,
  });
  let result;
  async () => {
    result = await eduData.save();
  };

  res.status(201).json({
    success: true,
    messsage: "Education Infomation Added Successfully",
  });
};

// API to to create Project Details
export const projectData = async (req, res) => {
  const { pTitle, pSkills, pDescription } = req.body;

  const projData = await ResumeData.create({
    pTitle,
    pSkills,
    pDescription,
  });
  let result;
  async () => {
    result = await projData.save();
  };

  res.status(201).json({
    success: true,
    messsage: "Project Infomation Added Successfully",
  });
};


// to get All Data 
export const getMyData = async (req, res) => {
  try {

    const Data = await ResumeData.find({});
    Data.forEach(function () {
      // console.log(data);
      res.status(200).json({
        success: true,
        Data,
      });
    });

    if (!ResumeData) return next(new ErrorHandler("Data Not found", 404));
  } catch (error) {
    console.log(error);
  }
}

