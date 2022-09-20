import React from 'react';

export default function Card({data, pageColor}) {
  const liveText = data.soundWarning ? 'live (sound)' : 'live'
  return (
    <div className={`card ${pageColor}-background-font`}>
      <div className="info">
        <img src={data.image} />
        <h2>{data.name}</h2>
        <h3>{data.shortDescription} <br/><span>({data.date})</span></h3>
        <h4>{data.tech.join(', ')}</h4>
      </div>
      <div className="links">
        {data.liveUrl && <a target="_blank" rel="noopener noreferrer" href={data.liveUrl}>{liveText}</a>}
        {data.liveUrl && data.githubUrl && <span> | </span>}
        {data.githubUrl && <a target="_blank" rel="noopener noreferrer" href={data.githubUrl}>github</a>}
      </div>
    </div>
  )
}