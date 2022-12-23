import mongoose  from "mongoose";

const User_Doc = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    }
    
});


const User_Col = mongoose.model("USER",User_Doc);
export default User_Col;

