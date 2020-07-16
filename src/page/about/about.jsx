import React from 'react';

export default function About({content, pageColor}) {
  return (
    <div className={`about-container ${pageColor}-background-font`}>
      <h1>{content.title}</h1>
        <div className="about">
        <div className="profile">
          <div className="about-image-cropper">
            <img className="about-image" src={content.image} />
          </div>
          <div className="skills">
        <h2>Skills</h2>
        {Object.keys(content.skills).map((skill)=> 
            <>
              <h4><span>{skill} </span>{content.skills[skill].join(', ')}</h4>
            </>
        )}
      </div>
        </div>
        <div className="content">
          {content.text.map((text) => <p>{text}</p>)}
        </div>
      </div>

    </div>
  )
}