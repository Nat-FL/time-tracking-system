import React from 'react';
import { useNavigate } from "react-router-dom";

const Accountdeleted = () => {
    const navigate = useNavigate();


    const loginReturn = async () => {
        navigate("/");
    }

    return (
        <div>
            <h2>Account Deleted sucessfuly</h2>
            <form onSubmit={loginReturn}>
                <button type="submit">return to login</button>
            </form>
        </div>
    );
};

export default Accountdeleted;