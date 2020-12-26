import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AboutUs from './AboutUs';
import Homepage from './Homepage';
import { Auth0Provider } from "@auth0/auth0-react";
import Pricing from './Pricing';

ReactDOM.render(
  <Auth0Provider
    domain="stocks-squared.us.auth0.com"
    clientId="Z7xxT9uyPSAALDN10E9Z6wm2csvU8LRi"
    redirectUri={window.location.origin}
  >
    <Homepage />
  </Auth0Provider>,
  document.getElementById('root')
);
