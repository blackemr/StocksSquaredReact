import React from 'react';
import './HomeLogo.css';

function HomeLogo() {
  return(
    <div>
      <div className="greyRectangle"></div>
      <div className="whiteRectangle"></div>
      <img src={window.location.origin + '/images/stocks-squared.png'} className="logo" alt="stocks squared logo"></img>

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
