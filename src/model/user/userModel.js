import userSchema from "./userSchema.js";


//insert user

export const insertUser=(userObj)=>{
    return userSchema(userObj).save()
}