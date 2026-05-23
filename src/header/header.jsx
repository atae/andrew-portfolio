import React, { useRef, useLayoutEffect } from 'react';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import Photo from './Andrew-Photo-Cropped.jpg';

export default function Header({currentLink, changeCurrentLink}) {
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    if (!headerRef.current) return;
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        document.documentElement.style.setProperty(
          '--header-height',
          `${Math.ceil(entry.contentRect.height)}px`
        );
      }
    });
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);
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
    'sidequests': {
      pageColor: 'orange',
      title: 'Side Quests'
    }
  }

  let backButtonColor = currentLink === 'engineer' ? 'white' : pageInfo[currentLink].pageColor
  return (
    <header ref={headerRef} className={`header ${pageInfo[currentLink].pageColor}-background-font`}>
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
              alt="Andrew Tae"
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