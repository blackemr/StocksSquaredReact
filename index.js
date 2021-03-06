import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Profile from './Profile';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="stocks-squared.us.auth0.com"
    clientId="Z7xxT9uyPSAALDN10E9Z6wm2csvU8LRi"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
