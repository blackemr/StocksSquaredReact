import React from 'react';
import './HomeNavbar.css';

function HomeNavbar() {
  return(
    <div>
      <ul className="menu">
        <li className="slogan"><em>Because you just never know</em></li>
        <li className="hrzLine">_____________________________________</li>
        <a className="link" href="/about-us">
            <li className="listItem">About Us</li>
        </a>
        <a className="link" href="/pricing">
            <li className="listItem">Pricing</li>
        </a>
        <a className="link" href="/colleges">
            <li className="listItem">Featured Colleges</li>
        </a>
        <a className="link" href="/feature-request">
            <li className="listItem">Feature Request</li>
        </a>
      </ul>
    </div>
  );
}

export default HomeNavbar;
