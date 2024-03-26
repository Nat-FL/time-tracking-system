import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordC, setPasswordC] = useState('');
    const [client, setClient] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/createAdmin', { username, password, passwordC, client });
            console.log(response.data); 
            navigate("/signupcomplete");

        } catch (error) {
            setError('Invalid Input, check for passwords match\n or Client name \n (contact current administrator if client already exists)');
        }
    };

    return (
        <div>
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>                <input type="text" placeholder="Client Name" value={client} onChange={(e) => setClient(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <input type="password" placeholder="Comfirm Password" value={passwordC} onChange={(e) => setPasswordC(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <button type="submit">Create Account</button>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Signup;