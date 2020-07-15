import React from 'react';
import SplashLink from './splashLink';


export default function SplashLinks({currentLink, changeCurrentLink}) {

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

  let onClick = (currentLink) => () => {changeCurrentLink(currentLink)}
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