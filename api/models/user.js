const db = require("../config/db")
const bcrypt = require("bcrypt");

class User{
    //convert user from database into a user object that can be manipulated and viewed publically

    //creates a user oject that holds values from database
    static createPublicUser(user){
        return{
            id: user.id, 
            name : user.name,
            password : user.password,
            status : user.status, 
            associated_clients : user.associated_clients, 
        }
    }

    //register function 
    static async register(creds){

       console.log("I made it here! I'm here! Before the result!")
      // const hashedPassword =  await bcrypt.hash(creds.password,10)

       //adding user information into the database
       const result =  await db.query(`
       INSERT INTO users(
        name,
        password,
        status,
        associated_clients)
        VALUES($1,$2,$3,$4)
        RETURNING user_id, name, status, associated_clients
       `, [creds.name, creds.password, creds.status, creds.associated_clients])

        const user = result.rows[0]; 
        return user; 
    }

    //retrieve user based on username
    static async getByUsername(username) {
        const result = await db.query('SELECT * FROM users WHERE name = $1', [
          username,
        ]);
        return result;
      }

}

module.exports= User