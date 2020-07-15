import React from 'react';

export default function About({content}) {
  return (
    <div className={"fadeIn"}>
      <h1>{content.title}</h1>
      <p>{content.text}</p>
      <img src={content.image} />
    </div>
  )
}