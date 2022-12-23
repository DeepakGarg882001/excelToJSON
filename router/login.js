import User_Col from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (request,response)=>{
       
    console.log(request.body);

    try {
     
         const { email , password }= request.body;

         if( !email || !password ){
            return response.status(401).json({error:"Please Fill the form Completely"});

         }
        
         const isUserExists = await User_Col.findOne({email});

         if(isUserExists){
              
            const checkPassword = await bcrypt.compare(password,isUserExists.password);
            

            if(!checkPassword){
                return response.status(401).json({error:"Invalid Credential !"});
            
            }else{
                 
             
             
           
            // Now Generate Token
            const data = {
                id:isUserExists._id
            } 
            const member_Key = process.env.JWT_KEY_MEMBER;
            
            
            let token = jwt.sign(data,member_Key);
            

            console.log(token);

            // Add token to DB
            const addToken = await User_Col.findByIdAndUpdate({_id:isUserExists._id} , {token});

            const user = await User_Col.findOne({_id:isUserExists._id});

            if(addToken){
                response.status(201).cookie("User_token",token).json({message:"You have Successfully LogedIn !",data:user});
            }else{
                response.status(401).json({error:" Login Process failed !"});
            }

          }

         }else{
            return response.status(401).json({error:"Invalid Credential !"});
         }

        
    } catch (error) {
        response.status(401).json({error});
    }


}

export default login;