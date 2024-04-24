import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import './Buttons.css';
import './Projects.css'
const Projects = () => {

  //variable should work on backend
  var isAdmin = true
  const [projects, setProjects] = useState([])

  useEffect(()=>{

    axios.get(`http://localhost:3000/projects`).then((response)=>{
       console.log("projects info: ", response.data)
       setProjects(response.data)
    })

  },[])

  function ProjectList(props){
    return (
      <div className='projectsContainer'>    
             <h2>{props.proj.project_name}</h2>
              <p>{props.proj.start_time}</p>
              <p>{props.proj.end_time}</p>
        </div>)
  }

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
      <div>
        {projects.map((project) => <ProjectList proj={project} />)}
      </div>
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