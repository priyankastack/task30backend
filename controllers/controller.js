const mdl=require('../models/model');




const register=async(req,res)=>{
    const {name,email,message}=req.body;
         const userexist=await mdl.findOne({email:email});
    try {
         if(userexist){
            return res.status(400).json({
                message:"User already exist!",
                success:false,
            });
         
         }else{
            const newuser=await mdl.create({name,email,message});
               res.status(201).json({
               message:"Registration successfull!" ,
               success:true,
               data:newuser
               });
         }
    } catch (error) {
        res.status(500).json({
            message:"something went wrong",
            success:false,
            data:message.error
        });
        console.log(error)
    }
}
module.exports=register;