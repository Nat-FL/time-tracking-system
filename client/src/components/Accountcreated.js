import React from 'react';
import { useNavigate } from "react-router-dom";

const Accountcreated = () => {
    const navigate = useNavigate();


    const loginReturn = async () => {
        navigate("/home");
    }

    return (
        <div>
            <h2>Account Created Sucessfuly</h2>
            <form onSubmit={loginReturn}>
                <button type="submit">Return To Homepage</button>
            </form>
        </div>
    );
};

export default Accountcreated;