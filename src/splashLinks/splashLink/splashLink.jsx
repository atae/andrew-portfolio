import React from 'react';

export default function SplashLink({background, text, position, onClick, expanded}) {  
  return(
    <div className={`splash-link ${position}-position ${expanded}`}>
      <button onClick={onClick} className={`${background}-background`}>
          <h2>{text}</h2>
      </button>
    </div>
  )
};