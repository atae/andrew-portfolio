import React from 'react';

export default function Card({data, pageColor}) {
  return (
    <div className={`card ${pageColor}-background-font`}>
      <div className="info">
        <img src={data.image} />
        <h2>{data.name}</h2>
        <h3>{data.shortDescription}</h3>
        <h4>{data.tech.join(', ')}</h4>
      </div>
      <div className="links">
        {data.liveUrl && <a target="_blank" rel="noopener noreferrer" href={data.liveUrl}>live</a>}
        {data.liveUrl && data.githubUrl && <span> | </span>}
        {data.githubUrl && <a target="_blank" rel="noopener noreferrer" href={data.githubUrl}>github</a>}
      </div>
    </div>
  )
}