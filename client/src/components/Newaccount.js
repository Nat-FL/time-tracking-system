import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Newaccount = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordC, setPasswordC] = useState('');
    const [client, setClient] = useState('');
    const [error, setError] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/createUser', { username, password, passwordC, role });
            console.log(response.data); 
            navigate("/accountcreated");

        } catch (error) {
            setError('Invalid Input, check for passwords match\n or user role/name');
        }
    };

    return (
        <div>
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <input type="password" placeholder="Confirm Password" value={passwordC} onChange={(e) => setPasswordC(e.target.value)} required />
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                <label>Role: </label>
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Employee">Employee</option>
                </select>
                </div>  
                <div style={{ marginBottom: '16px' }}>                <button type="submit">Create Account</button>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Newaccount;