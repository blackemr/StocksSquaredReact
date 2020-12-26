import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './HomeLogo.css';

function HomeLogo() {
  return(
    <div>
      <div className="greyRectangle"></div>
      <div className="whiteRectangle"></div>
      <img src="./Images/TempLogo.png" className="logo"></img>

      <div className="loginRectangle"></div>
        <a href='#'>
        <div className="login">
          <h1 className='loginText'>Login</h1>
      </div>
      </a>

      <div className="signinRectangle"></div>
        <a href='#'>
        <div className="signup">
          <h1 className='signupText'>Sign Up</h1>
        </div>
      </a>

    </div>
  );
}

export default HomeLogo;
