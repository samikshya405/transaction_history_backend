import express from "express";
import { getTransaction, insertTransaction } from "../model/transaction/transactionModel.js";
const router = express.Router()


router.get('/',async(req,res)=>{
    try {
        const result =await getTransaction()
        result?.length>0 ?
        res.json(result):
        res.json({
            status:"error"
        })

    } catch (error) {
        console.log(error)
        
    }
})

router.post('/',async(req,res)=>{
    try {
        const result = await insertTransaction(req.body)
        result?._id ?
        res.json({
            status:"success",
            message:"transaction added.."

        }):
        res.json({
            status:"error",
            message:"not able to add"

        })
        
        
      } catch (error) {
        console.log(error)
        res.status(500).json({
            status: "error",
            message: "failed to add new user",
          });
      }
    


})
export default router