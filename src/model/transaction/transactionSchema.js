import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }


   
})

export default mongoose.model("transaction", transactionSchema)