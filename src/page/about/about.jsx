import React from 'react';

export default function About({content, pageColor}) {
  return (
    <div className={`about ${pageColor}-background-font`}>
      <div className="content">
        <h1>{content.title}</h1>
        {content.text.map((text) => <p>{text}</p>)}
      </div>
      <div className="profile">
        <div className="about-image-cropper">
          <img className="about-image" src={content.image} />
        </div>
        <p></p>
      </div>
    </div>
  )
}