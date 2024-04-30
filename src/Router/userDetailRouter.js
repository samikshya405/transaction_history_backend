import express from "express";
import { findEmail, insertUser } from "../model/user/userModel.js";
const router = express.Router();

router.get("/", async(req, res) => {
  try {
    
   
   
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const email = req.body.email;
    const message = await findEmail({ email });
    if (message?.email === email) {
      res.json({
        status: "email already exist",
        message: "Email already exist. Please use another email",
      });
    } else {
      const result = await insertUser(req.body);
      // console.log(result);
      result._id
        ? res.json({
            status: "success",
            message: "Your account has been created !",
          })
        : res.json({
            status: "error",
            message: "unable to process your request try again later",
          });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "failed to add new user",
    });
  }
});


///

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //get the user email and get user from db
    const user = await findEmail({email});
    console.log(user);

    if (user?._id) {
      //compare password
      
      if (user.password===password) {
        //authorized
        return res.json({
          status: "success",
          message: "Logged in successfully",
          user,
        });
      }
    }

    return res.json({
      status: "error",
      message: "Invalid login credentials",
    });
  } catch (error) {
    console.log(error);
    let code = 500;

    res.status(code).json({
      status: "error",
      message: error.message,
    });
  }
});
export default router;
