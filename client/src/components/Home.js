import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to your Time-Tracking Headquarters.</h1>
        <p>Efficiently manage your projects and track your work hours.</p>
      </div>
      <div className="home-links">
        <Link to="/projects" className="home-link">
          <div className="home-link-content">
            <h2>Projects</h2>
            <p>Explore all ongoing projects</p>
          </div>
        </Link>
        <Link to="/profile" className="home-link">
          <div className="home-link-content">
            <h2>User Profile</h2>
            <p>View your profile and manage your account.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
