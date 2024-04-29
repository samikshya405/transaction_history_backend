import express from "express";
import { insertUser } from "../model/user/userModel";
const router = express.Router();

router.get("/", (req, res) => {
  console.log("ajskdkajsdfjkasghdfjkasjkdasgjk");
  try {
    console.log(req.body);
    res.json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async(req, res) => {
  try {
    const result = await insertUser(req.body)
    
    result._id ? 
    res.json({
      status: "success",
      message: "todo post",
    }):
    res.json({
        status:'error',
        message:"unable to process your request try again later"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "failed to add new user",
    });
  }
});
export default router;
