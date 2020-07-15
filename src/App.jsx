import React, {useState} from 'react';
import './App.scss';
import SplashLinks from './splashLinks';
import Header from './header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let [currentLink, changeCurrentLink] = useState('home');
  return (
    <div className="App">
      <Router>
        <Header currentLink={currentLink} changeCurrentLink={changeCurrentLink}/>
        <SplashLinks currentLink={currentLink} changeCurrentLink={changeCurrentLink}/>
        <Switch>
          <Route path="/engineer" component={()=>{return(<p>Doof</p>)}}/>
          <Route path="/music" component={()=>{return(<p>Maw</p>)}} />
          <Route path="/nerd" component={()=>{return(<p>Yuh</p>)}} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
