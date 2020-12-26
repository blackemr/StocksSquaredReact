import React from 'react';
import './Homepage.css';
import HomeNavbar from './components/Homepage-Components/HomeNavbar/HomeNavbar';
import HomeLogo from './components/Homepage-Components/Homepage-Logo/HomeLogo';
import HomeVid from './components/Homepage-Components/Homebackground/HomeVid';

function Homepage() {
  return (
    <>
      <HomeVid />
      <HomeNavbar />
      <HomeLogo />
    </>
  );
}

export default Homepage;
