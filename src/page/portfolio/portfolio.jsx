import React from 'react';
import Card from './card';

export default function Portfolio({pageColor, content}) {
  return (
    <div className={`portfolio ${pageColor}-background-font`}>
      {content.map(data => <Card data={data} pageColor={pageColor}/>)}
    </div>
  )
}