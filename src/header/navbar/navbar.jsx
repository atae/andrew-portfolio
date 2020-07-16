import React from 'react';
import {Link, useLocation} from 'react-router-dom';

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
    'nerd': [
      {
        pageName: 'about',
        text: 'About',
      },
      {
        pageName: 'japanese',
        text: '日本語'
      },
      {
        pageName: 'gaming',
        text: 'Gaming'
      },
      {
        pageName: 'blog',
        text: 'Blog'
      }
    ]
  }
  let currentPage = useLocation().pathname.split('/')[2]

  let generateLinks = () => {
    return navbarLinks[currentLink].map(linkInfo => {
      return (<li>
        <Link 
          className={linkInfo.pageName === currentPage ? 'active' : ''}
          to={`/${currentLink}/${linkInfo.pageName}`}
        >
          {linkInfo.text}
        </Link>
      </li>)
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
