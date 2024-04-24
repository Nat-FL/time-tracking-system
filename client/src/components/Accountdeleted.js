import React from 'react';
import { useNavigate } from "react-router-dom";

const Accountdeleted = () => {
    const navigate = useNavigate();


    const loginReturn = async () => {
        navigate("/");
    }

    return (
        <div>
            <h2>Account Deleted Sucessfuly</h2>
            <form onSubmit={loginReturn}>
                <button type="submit">Return To Login</button>
            </form>
        </div>
    );
};

export default Accountdeleted;