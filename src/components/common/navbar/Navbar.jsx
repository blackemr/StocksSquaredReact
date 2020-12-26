import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar mt-4">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about-us">
                    <li>About</li>
                </Link>
                <Link to="/pricing">
                    <li>Pricing</li>
                </Link>
                <Link to="/colleges">
                    <li>Colleges</li>
                </Link>
                <Link to="/feature-request">
                    <li>Feature Request</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar
