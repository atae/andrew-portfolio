import React, {useState} from 'react';
import './App.scss';
import SplashLinks from './splashLinks';
import Header from './header';
import Page from './page';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";


function App() {
  let urlLink = useLocation().pathname.split('/')[1]
  let [currentLink, changeCurrentLink] = useState(urlLink ? urlLink : 'home');
  let navbarLinks = {
    'home' : [],
    'engineer': [
      {
        pageName: 'about',
        text: 'About',
      },
      {
        pageName: 'portfolio',
        text: 'Portfolio',
      },
      {
        pageName: 'contact',
        text: 'Contact'
      }
    ],
    'music': [
      {
        pageName: 'about',
        text: 'About',
      },
      {
        pageName: 'discography',
        text: 'Discography',
      },
      {
        pageName: 'store',
        text: 'Store',
      },
      {
        pageName: 'transcriptions',
        text: 'Sheet&nbsp;Music',
      },
      {
        pageName: 'contact',
        text: 'Contact'
      }
    ],
    'nerd': []
  }



  return (
    <div className="App">
      <Header currentLink={currentLink} changeCurrentLink={changeCurrentLink}/>
      <SplashLinks currentLink={currentLink} changeCurrentLink={changeCurrentLink}/>
      <Switch>
        <Route path="/engineer" component={({match})=>{return(<Page match={match} type="engineer"/>)}}/>
        <Route path="/music" component={({match})=>{return(<Page match={match} type="music"/>)}}/>
        <Route path="/nerd" component={({match})=>{return(<Page match={match} type="nerd"/>)}}/>
      </Switch>
    </div>
  );
}

export default App;
