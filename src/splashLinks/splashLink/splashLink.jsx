import React from 'react';
import {Link} from 'react-router-dom';

export default function SplashLink({background, text, position}) {
  return(
    <div className={`splash-link ${position}-position unexpanded`}>
      <button className={`${background}-background`}>
          <h2>{text}</h2>
      </button>
    </div>
  )
};