const db = require("../config/db")

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

    //updates user password
    static async updatePassword(userId, newPassword) {
        try {
            await db.query(
                `UPDATE users
                 SET password = $1
                 WHERE user_id = $2`,
                [newPassword, userId]
            );
        } catch (error) {
            throw new Error(`Error updating password: ${error}`);
        }
    }

    //removes user from database
    static async deleteUser(userId) {
        try {
            await db.query(
                `DELETE FROM users
                 WHERE user_id = $1`,
                [userId]
            );
        } catch (error) {
            throw new Error(`Error deleting user: ${error}`);
        }
    }

    //gets user from a given user id
    static async getByUserId(userId) {
        try {
            const result = await db.query(
                `SELECT * FROM users
                 WHERE user_id = $1`,
                [userId]
            );
            return result;
        } catch (error) {
            throw new Error(`Error getting user by id: ${error}`);
        }
    }

}

module.exports= User