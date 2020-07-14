import React, {useState} from 'react';
import './App.scss';
import SplashLinks from './splashLinks';
import Header from './header';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  let [currentLink, changeCurrentLink] = useState('home');
  return (
    <div className="App">
      <Header currentLink={currentLink}/>
      <SplashLinks currentLink={currentLink} changeCurrentLink={changeCurrentLink}/>
    </div>
  );
}

export default App;
