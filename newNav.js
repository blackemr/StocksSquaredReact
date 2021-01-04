import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './newNav.css';

function NewNav()  {
  return (
  <div className="navRect">

    <Link to="/" className="link">
      <img src='Images/stocks-squared.png' className="navLogo"/>
    </Link>
    <ul className="navList">
      <Link to="/" className="link">
          <li className="listObject">Home</li>
      </Link>
      <Link to="/about-us" className="link">
          <li className="listObject">About</li>
      </Link>
      <Link to="/pricing" className="link">
          <li className="listObject">Pricing</li>
      </Link>
      <Link to="/colleges" className="link">
          <li className="listObject">Colleges</li>
      </Link>
      <Link to="/feature-request" className="link">
          <li className="listObject">Feature Request</li>
      </Link>
    </ul>
  </div>
);
}

export default NewNav;
