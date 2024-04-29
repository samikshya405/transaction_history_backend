import express from "express";
const router = express.Router()


router.get('/',(req,res)=>{
    try {
        console.log(req.body)
        res.json({
            status:"success",

        })
    } catch (error) {
        console.log(error)
        
    }
})

router.post('/',async(req,res)=>{
    try {
        console.log(req.body)
        console.log('data recevied')
        res.json({
            status:"success",

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