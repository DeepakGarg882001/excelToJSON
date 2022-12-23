import mongoose from "mongoose";

const Contact_Doc = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    linkedin_profile_url:{
        type:String
    }

 


})

const Contact_Col = mongoose.model("CONTACT",Contact_Doc);
export default Contact_Col;