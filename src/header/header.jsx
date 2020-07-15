import React from 'react';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import Photo from './Andrew-Photo-Cropped.jpg';

export default function Header({currentLink, changeCurrentLink}) {
  let pageInfo = {
    'home': {
      pageColor:'',
      title: ''
    },
    'engineer': {
      pageColor: 'green',
      title: 'Software Engineer'
    },
    'music': {
      pageColor: 'white',
      title: 'Musician'
    },
    'nerd': {
      pageColor: 'orange',
      title: 'Nerd'
    }
  }

  let backButtonColor = currentLink === 'engineer' ? 'white' : pageInfo[currentLink].pageColor
  return (
    <header className={`header ${pageInfo[currentLink].pageColor}-background-font`}>
      <div className="info-container">
        <div className='andrew-head-cropper'>
          { currentLink !== 'home' && 
            <p className={`${backButtonColor}-background-font`}>
              Back
            </p>
          }
          <Link to={"/"} className={currentLink === 'home' ? 'disable-link' : ''} onClick={()=> {changeCurrentLink('home')}}>
            <img 
              className={`andrew-head ${ currentLink === 'home' ? '' : 'clickable'}`} 
              src={Photo}
              />
          </Link>
        </div>
        <div className="andrew-title">
          <h1>Andrew Tae</h1>
          <div className={currentLink === 'home' ? 'title-placeholder' : ''}></div>
          <h2 className={currentLink === 'home' ? 'fadeOut' : 'fadeIn'}>{pageInfo[currentLink].title}</h2>
        </div>
      </div>
      <Navbar pageInfo={pageInfo[currentLink]} currentLink={currentLink}/>
    </header>

  )
};