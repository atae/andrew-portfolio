import React from 'react';
import {Link} from 'react-router-dom';

export default function SplashLink({background, text, position, onClick, expanded, clicked, pageName}) { 
  let clickedClass = clicked ? 'clicked' : '';
  return(
    <div className={`splash-link ${position}-position ${expanded} ${clickedClass}`}>
      <Link to={`${pageName}/about`}>
        <button onClick={onClick} className={`${background}-background ${clickedClass}`}>
            <h2 className={clicked ? 'fadeOut' : 'fadeIn'}>{text}</h2>
        </button>
      </Link>
    </div>
  )
};