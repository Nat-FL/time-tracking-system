require("dotenv").config(); 
const {Pool} = require("pg"); 

//SQL script as a string to create a table
const sqlScript = `
    CREATE TABLE IF NOT EXISTs users(
        id SERIAL PRIMARY KEY,
        firstName VARCHAR(255)  NULL,
        lastName VARCHAR(255)  NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
            );
`;

//create a postgreSQL pool
const pool = new Pool({
    user: process.env.DB_USER, 
    host: process.env.DB_HOST, 
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

//Execute SQL script to create table called users
pool.query(sqlScript)
.then(()=>{
    console.log("Table created successfully!");
})
.catch((error)=>{
    console.error("Error created table: ", error); 
})

module.exports = pool; 
