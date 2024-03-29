import React, { useEffect } from 'react';
import SplashLink from './splashLink';
import {useLocation} from 'react-router-dom';



export default function SplashLinks({currentLink, changeCurrentLink}) {
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      changeCurrentLink('home');
    }
  }, [location])

  let links = [
    {
      background: 'green',
      text: 'Software Engineer',
      pageName: 'engineer'
    },
    {
      background: 'white',
      text: 'Musician',
      pageName: 'music'
    },
    {
      background: 'orange',
      text: 'Nerd',
      pageName: 'nerd'
    }
  ]

  let onClick = (nextLink) => () => { 
    if (currentLink === 'home') {
      changeCurrentLink(nextLink)
    }
  }

  let assignExpandedClass = (pageName) => {
    if (currentLink === 'home') {
      return 'unexpanded';
    } else {
      return pageName === currentLink ? 'expanded' : 'flat';
    }
  }

  let generateSplashLinks = () => {
    return links.map((link, i) => {
      return (
        <SplashLink
          background = {link.background}
          text = {link.text}
          position = {i}
          onClick = {onClick(link.pageName)}
          clicked = {link.pageName === currentLink}
          pageName = {link.pageName}
          currentLink = {currentLink}
          expanded = {assignExpandedClass(link.pageName)}
          key={`splashLink${i}`}
        />
      )
    });
  }


  return(
    <div className={`splash-links`}>
      {generateSplashLinks()}
    </div>
  )
};