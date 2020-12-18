import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar mt-4">
            <ul>
                <a href="/"><li>About</li></a>
                <a href="/"><li>Pricing</li></a>
                <a href="/"><li>Colleges</li></a>
                <a href="/"><li>Feature Request</li></a>
            </ul>
        </div>
    )
}

export default Navbar
