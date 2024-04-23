import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

function Profile() {
  isAdmin = true;
  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: "80px 60px", minHeight: '100vh-100px', width: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <main>
            <h2>Profile</h2>
            <p>Options</p>
            <section>
                <Link to='/passwordchange'>
                <button class="button-28" role="button" style={{width: '250px'}}>Change Password</button>
                </Link>
                <pre></pre>
                <Link to='/accountdeleteconfirm'>
                <button class="button-28" role="button" style={{width: '250px'}}>Delete Account</button>
                </Link>
                {isAdmin && <p>Admins only</p>}
                {isAdmin && <Link to='/newaccount'>
                <button class="button-28" role="button" style={{width: '250px'}}>Create an Account</button>
                </Link>}
            </section>
        </main>
    </div>
  );
}

export default Profile;