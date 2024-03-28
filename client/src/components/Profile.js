import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: "80px 60px", minHeight: '100vh-100px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <main>
            <h2>Profile</h2>
            <p>options</p>
            <section>
                <Link to='/passwordchange'>Change Password</Link>
                <pre></pre>
                <Link to='/accountdeleteconfirm'>Delete Account</Link>
                <p>admins only</p>
                <Link to='/newaccount'>Create an account</Link>
            </section>
        </main>
    </div>
  );
}

export default Profile;