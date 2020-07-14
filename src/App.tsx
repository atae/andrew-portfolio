import React from 'react';
import './App.scss';
import SplashLink from './splashLink';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <SplashLink background="green" text="Frontend Software Engineer" position="first"/>
      <SplashLink background="white" text="Musician" position="second"/>
      <SplashLink background="orange" text="Nerd" position="third"/>

    </div>
  );
}

export default App;
