import React from 'react';

export default function Header({currentLink}) {
  let pageColor = {
    'home': '',
    'engineer': 'green',
    'music': 'white',
    'nerd': 'orange'
  }

  return (
    <header className={`header ${pageColor[currentLink]}-background`}>
      <h1>Andrew Tae</h1>
    </header>
  )
};