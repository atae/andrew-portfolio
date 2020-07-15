import React from 'react';
import Photo from './Andrew-Photo-Cropped.jpg';

export default function Header({currentLink}) {
  let pageColor = {
    'home': '',
    'engineer': 'green',
    'music': 'white',
    'nerd': 'orange'
  }

  return (
    <header className={`header ${pageColor[currentLink]}-background-font`}>
      <div className='andrew-head-cropper'>
        <img className="andrew-head" src={Photo}/>
      </div>
      <h1>Andrew Tae</h1>
    </header>
  )
};