import React from 'react';
import { Link } from 'react-router-dom';

const Passwordconfirm = () => {
    return (
        <div>
            <h2>Password Changed Sucessfuly</h2>
            <Link to='/home'>Return Home</Link>
        </div>
    );
};

export default Passwordconfirm;