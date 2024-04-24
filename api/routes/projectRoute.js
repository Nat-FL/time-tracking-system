const express = require("express"); 
const router = express.Router(); 
const db = require("../config/db");
const Projects = require("../models/projects");

router.get("/",(req,res)=>{
    db.query("SELECT * FROM projects", (err,result)=>{
        if(err){
            console.err("Error retrieving projects: ", err); 
            res.status(500).json({error:"An error occurred while retrieving users. Internal server error"})
        }else{
            res.json(result.rows)
        }
    })
})

router.post("/create", async function(req, res,next){
    
    try{
        console.log("whats inside request: ", req.body)
        const project= await Projects.createProject(req.body)
        console.log("project info:", project)
       
        return res.status(201).json(
            {message:"project successfully created",
            project:project})
        
    }catch(err){
         next(err)
     }
})

module.exports = router;