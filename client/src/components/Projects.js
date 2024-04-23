import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

  //variable needs to work on backend
  var isAdmin = true

  return (
    <div  style={{ backgroundColor: 'white', color: 'black', padding: "80px 60px", minHeight: '100vh-100px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <h1>Project 1 - Funding</h1>
      <Link to="/data">Click here for more information.</Link>
      {isAdmin && (
        <Link to='/newproject'>
          <button class="button-28" role="button" style={{width: '250px'}}>Create an New Project</button>
        </Link>
      )}
    </div>
  );
}

export default Projects;