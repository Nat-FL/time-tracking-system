import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: "80px 60px", minHeight: '100vh-100px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <main>
            <h2>Welcome, *Insert Username here*</h2>
            <p>*role* options</p>
            <section>
                <Link to='/passwordchange'>Change Password</Link>
                <pre></pre>
                <Link to='/accountdeleteconfirm'>Delete Account</Link>
                <p>if *role* is admin</p>
                <Link to='/newaccount'>Create an account</Link>
            </section>
        </main>
    </div>
  );
}

export default Profile;