import transactionSchema from "./transactionSchema.js"


export const insertTransaction=(transaction)=>{
    return transactionSchema(transaction).save()

}

export const getTransaction=()=>{
    return transactionSchema.find()
}