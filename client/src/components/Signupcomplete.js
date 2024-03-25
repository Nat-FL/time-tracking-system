import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signupcomplete = () => {
    const navigate = useNavigate();


    const loginReturn = async () => {
        navigate("/");
    }

    return (
        <div>
            <h2>Account Created sucessfuly</h2>
            <form onSubmit={loginReturn}>
                <button type="submit">return to login</button>
            </form>
        </div>
    );
};

export default Signupcomplete;