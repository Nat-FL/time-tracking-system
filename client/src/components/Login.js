import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', { username: username, password: password });
            console.log(response.data); 
            navigate("/home");

        } catch (error) {
            setError('Invalid username or password');
        }
    };


    const handleSignup = async () => {
        navigate("/signup");
    }

    return (
        <div>
            <div style={{ marginBottom: '200px', maxHeight: '100px'}}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </form>
                {error && <p>{error}</p>}
            </div>    
                   
            <div>
                <h4>Administrator Create Account</h4>
                <form onSubmit={handleSignup}>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );
};

export default Login;