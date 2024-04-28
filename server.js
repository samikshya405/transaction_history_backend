import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import morgan from "morgan";

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan())

const PORT = process.env.PORT || 8000


app.listen(PORT, (error)=>{
    error ?
    console.log(error)
    :
    console.log("server running in port ", PORT)

})