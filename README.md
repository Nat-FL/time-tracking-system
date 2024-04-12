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
4. Start the server from the api directory:
   ```sh
   node server.js
   ```
### Database Connection
1. cd to api directory
2. install necessary depedencies for backend
   ```sh
   npm install express cors morgan dotevn nodemon pg
   ```
3. Start the server up
   ```sh
   run node server.js
   ```
4. After running server, should see message
   ```sh
   Server running on port 3000
   Table created successfully!
   ```
## Notices
- This currently only runs locally on port 3000.
