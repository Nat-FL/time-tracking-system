import React from 'react';
import { useNavigate } from "react-router-dom";

const Accountcreated = () => {
    const navigate = useNavigate();


    const loginReturn = async () => {
        navigate("/home");
    }

    return (
        <div>
            <h2>Account Created sucessfuly</h2>
            <form onSubmit={loginReturn}>
                <button type="submit">return to homepage</button>
            </form>
        </div>
    );
};

export default Accountcreated;