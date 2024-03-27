import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Passwordchange = () => {
    const navigate = useNavigate();
    const [passwordOld, setOld] = useState('');
    const [password, setPassword] = useState('');
    const [passwordC, setPasswordC] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/changepassword', { passwordOld, password, passwordC});
            console.log(response.data); 
            navigate("/passwordconfirm");

        } catch (error) {
            setError('Invalid Input, make sure new passwords match and do not match old password');
        }
    };

    return (
        <div>
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>                <input type="text" placeholder="Old Password" value={passwordOld} onChange={(e) => setOld(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <input type="password" placeholder="Comfirm New Password" value={passwordC} onChange={(e) => setPasswordC(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <button type="submit">Change password</button>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Passwordchange;