import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar mt-4">
            <ul>
                <a href="/"><li>Home</li></a>
                <a href="/about-us"><li>About</li></a>
                <a href="/colleges"><li>Colleges</li></a>
                <a href="/feature-request"><li>Feature Request</li></a>
            </ul>
        </div>
    )
}

export default Navbar
