const express = require("express"); 
const router = express.Router(); 
const db = require("../config/db");

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

module.exports = router;