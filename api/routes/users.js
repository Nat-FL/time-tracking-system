const express = require("express"); 
const router = express.Router(); 
const db = require("../config/db");
const User = require("../models/user");

router.get("/",(req,res)=>{
    db.query("SELECT * FROM users", (err,result)=>{
        if(err){
            console.err("Error retrieving users: ", err); 
            res.status(500).json({error:"An error occurred while retrieving users. Internal server error"})
        }else{
            res.json(result.rows)
        }
    })
})

router.post("/register", async function(req, res,next){
    
    try{
        console.log("whats inside request: ", req.body)
        const user= await User.register(req.body)
        console.log("user info:", user)
       
        return res.status(201).json(
            {message:"user register successful",
            user:user})
        
    }catch(err){
         next(err)
     }
})

module.exports = router;