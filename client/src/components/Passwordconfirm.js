import React from 'react';
import { useNavigate } from "react-router-dom";

const Passwordconfirm = () => {
    const navigate = useNavigate();


    const homeReturn = async () => {
        navigate("/home");
    }
    return (
        <div>
            <h2>Password Changed Successfuly</h2>
            <form onSubmit={homeReturn}>
                <button type="submit">Return To Home</button>
            </form>
        </div>
    );
};

export default Passwordconfirm;