import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Newproject = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [Employee, setEmployee] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //createProject
            //, Employee 
            const response = await axios.post('http://localhost:3000/projects/create', { name, start, end});
            console.log(response.data); 
            navigate("/projects");

        } catch (error) {
            setError('Invalid Input!');
        }
    };

    return (
        <div>
            <h2>Add a Project</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>                <input type="text" placeholder="Project Name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <input type="time" placeholder="Start Time" value={start} onChange={(e) => setStart(e.target.value)} required />
                </div>
                <div style={{ marginBottom: '16px' }}>                <input type="time" placeholder="End Time" value={end} onChange={(e) => setEnd(e.target.value)} required />
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                <label>Users: </label>
                <input type="text" placeholder="employees" value={Employee} onChange={(e) => setEmployee(e.target.value)} required />
                </div>

                <div style={{ marginBottom: '16px' }}>                <button type="submit">Create Project</button>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default Newproject;