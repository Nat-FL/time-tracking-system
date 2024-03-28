import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: "80px 60px", minHeight: '100vh-100px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <main>
            <section>
                <h2>Projects</h2>
                <p>Explore all ongoing projects</p>
                <Link to="/projects">View Projects</Link>
            </section>
            <section>
                <h2>User Profile</h2>
                <p>View your profile and manage your account. hi!</p>
                <Link to="/profile">View Profile</Link>
            </section>
        </main>
    </div>
  );
}

export default Home;