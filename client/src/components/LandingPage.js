import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', color: '#212529', padding: '50px 20px', minHeight: '100vh', display: 'flex', width: '600px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p>Welcome to Employee Time-Tracker!</p>
      <p>Track your time efficiently with our application.</p>
      <div>
        <img src="/images/paperwork-5000691_1280.png" alt="Paperwork" style={{ width: '60vh', height: '50vh'}} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <Link to="/login">
        <button class="button-28" role="button" style={{width: '150px', marginRight: '50px'}}>Login</button>
        </Link>
        <Link to="/signup">
        <button class="button-28" role="button" style={{width: '150px'}}>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
