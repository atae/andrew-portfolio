import React, {useState, Suspense, lazy} from 'react';
import './App.scss';
import SplashLinks from './splashLinks';
import Header from './header';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Page from './page';
// const Page = lazy(() => import('./page'));


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

  const suspendedPage = (type, match) => {
    // <Suspense fallback={<div className="white-background-font">Loading...</div>}>
    // </Suspense>
    return (
        <Page match={match} type={type} />
    );
  }

  return (
    <div className="App">
      <Header currentLink={currentLink} changeCurrentLink={changeCurrentLink}/>
      <SplashLinks currentLink={currentLink} changeCurrentLink={changeCurrentLink}/>
      <Switch>
        <Route path="/engineer" component={({match})=>{return(suspendedPage('engineer', match))}}/>
        <Route path="/music" component={({match})=>{return(suspendedPage('music', match))}}/>
        <Route path="/nerd" component={({match})=>{return(suspendedPage('nerd', match))}}/>
      </Switch>
    </div>
  );
}

export default App;
