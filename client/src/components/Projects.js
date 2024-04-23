import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Buttons.css'

const Projects = () => {

  //variable should work on backend
  var isAdmin = true

  return (
    <div className='home-container'>
      <div className='home-content'>
        <h1>Select a Project</h1>
      </div>
      <div  classname='home-links'>
          <Link to="/data" className='home-link'>
            <div className='home-link-content'>
             <h2>Project 1 - Funding</h2>
              <p>click here for more info</p>
            </div>
          </Link>
        </div>
        <div>
        {isAdmin && (
          <Link to='/newproject'>
            <button class="button-28" role="button" style={{width: '250px'}}>
              Create an New Project
              </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Projects;