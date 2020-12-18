import React from 'react';
import { Navbar } from '../../common';
import './Header.css';

function Header () {
    return (
        <section className="header">
            <section className="header-top mt-5">
                {/* Logo */}
                <section className="header-top-logo text-left">
                    <a href="/" className="header-link">
                        <img src={window.location.origin + '/images/stocks-squared.png'} className="header-logo-image" alt="stocks squared logo"/>
                    </a>
                </section>
                {/* Signup and Register */}
                <section className="header-top-account">
                    <a href="/" className="btn btn-custom-1">Register</a>
                    <a href="/" className="btn btn-custom-2 ml-3">Login</a>
                </section>
            </section>
            <section className="header-bottom">
                {/* Navbar */}
                <section className="header-top-navbar">
                    <Navbar />
                </section>
            </section>
        </section>
    );
}

export default Header;