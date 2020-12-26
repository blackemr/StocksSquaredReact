import React from 'react';
import './HomeVid.css';

function HomeVid() {
  return (
    <video autoPlay muted loop id="background-video">
      <source src={window.location.origin + '/images/stocks-background.mp4'} type="video/mp4"></source>
    </video>
  );
}

export default HomeVid;
