import React from 'react';
import { Link } from 'react-router-dom';

const Passwordconfirm = () => {
    return (
        <div>
            <h2>Password changed sucessfuly</h2>
            <Link to='/home'>Return Home</Link>
        </div>
    );
};

export default Passwordconfirm;