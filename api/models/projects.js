const db = require("../config/db");

class Projects{

     //create a project oject that holds values from database
     static createPublicUser(project){
        return{
            id: project.id, 
            project_name : project.name,
            start_time : project.start, 
            end_time : project.end, 
        }
    }

    //create function 
    static async createProject(info){
        console.log("information inside info:")
        console.log(info)
         //adding user information into the database
        // console.log("inside createProject function");
         const result =  await db.query(`
         INSERT INTO projects(
          project_name,
          start_time,
          end_time)
          VALUES($1,$2,$3)
          RETURNING project_id, project_name, start_time, end_time
         `, [info.name, info.start, info.end])
  
          const projects = result.rows[0]; 
          return projects; 
      }
}

module.exports= Projects