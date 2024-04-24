# Time-Tracking System

This is an Employee time tracking system 

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ajferrell/time-tracking-system.git
   ```
2. From the api directory, install NPM packages
   ```sh
   npm install
   ```
3. From the client directory, install NPM packages
   ```sh
   npm install
   ```
4. From the client directory, create a production build
   ```sh
   npm run build
   ```
5. Start the server from the api directory:
   ```sh
   node server.js
   ```
### Database Connection

1. Download and Install PostgreSQL and pgAdmin:
   https://www.postgresql.org/download/
   
2. Create a server and database in pgAdmin: <br>
   Open pgAdmin and create a new server.
   Within the server, create a new database. Remember the database name, username,     and password for later use.

3. Create a ".env" file in the api directory with the following content:
   ```sh
   DB_USER=your_username
   DB_HOST=localhost
   DB_DATABASE=your_database_name
   DB_PASSWORD=your_password
   DB_PORT=your_port_number
   ```
4. Run the database initialization script using your username for the database in place of "your_username":
   ```sh
   psql -f tracking.sql -U your_username
   ```
5. Start the server from the api directory:
   ```sh
   node server.js
   ```
6. After running server, should see message
   ```sh
   Server running on port 3000
   Table created successfully!
   ```
## Notices
- This currently only runs locally on port 3000.
- To have access to psql commands, make sure to add PostgreSQL's `bin` and `lib` directories to your system's PATH environmental variable. 
  - For Windows, this is usually `C:\Program Files\PostgreSQL\<version>\bin` and `C:\Program Files\PostgreSQL\<version>\lib`. 
  - For macOS and Linux, it's often `/usr/local/bin/` and `/usr/local/lib/`. 
- To drop and recreate the database, run the command `psql -f tracking.sql -U your_username`.
