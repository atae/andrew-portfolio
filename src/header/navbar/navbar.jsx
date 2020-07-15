import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar({currentLink, pageInfo}) { 
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
        text: 'Sheet Music',
      },
      {
        pageName: 'contact',
        text: 'Contact'
      }
    ],
    'nerd': []
  }

  let generateLinks = () => {
    return navbarLinks[currentLink].map(linkInfo => {
      return (<li><Link to={`/${currentLink}/${linkInfo.pageName}`}>{linkInfo.text}</Link></li>)
    })
  }

  return (
    <nav className={`navbar-container ${currentLink === 'home' ? 'fadeOut' : 'fadeIn'}`}>
      <ul className={`navbar-list ${pageInfo.pageColor}-background-font`}>
        {generateLinks()}
      </ul>
    </nav>
  )
};
