import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './HomeNavbar.css';

function HomeNavbar() {
  return(
    <div>
      <ul className="menu">
        <li className="slogan"><em>Because you just never know</em></li>
        <li className="hrzLine">_____________________________________</li>
        <a href='#' className="link"><li className="listItem">About Us</li></a>
        <a href='#' className="link"><li className="listItem">Pricing </li></a>
        <a href='#' className="link"><li className="listItem">Featured Colleges</li></a>
        <a href='#' className="link"><li className="listItem">Feature a Request</li></a>
      </ul>
    </div>
  );
}

export default HomeNavbar;
