import React from 'react';
import SplashLink from './splashLink';


export default function SplashLinks() {

  return(
    <div className={`splash-links`}>
      <SplashLink background="green" text="Software Engineer" position="first"/>
      <SplashLink background="white" text="Musician" position="second"/>
      <SplashLink background="orange" text="Nerd" position="third"/>
    </div>
  )
};