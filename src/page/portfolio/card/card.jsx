import React from 'react';

const Link = ({link, text}) => <a target="_blank" rel="noopener noreferrer" href={link}>{text}</a>

export default function Card({data, pageColor}) {
  const liveText = data.soundWarning ? 'live (sound)' : 'live'
  return (
    <div className={`card ${pageColor}-background-card`}>
      <div className="info">
        {data.audioSrc
          ? <audio className="audio-player" controls src={data.audioSrc} />
          : data.image
            ? <img src={data.image} alt={data.name} style={data.imageBg ? {backgroundColor: data.imageBg, padding: '4px'} : undefined} />
            : <div className="card-image-placeholder"><span>{data.name}</span></div>
        }
        {data.wip && <span className="wip-badge">WIP</span>}
        <h2>{data.name}</h2>
        <h3>
          {data.shortDescription}
          {data.shortDescription && data.date && <br/>}
          {data.date && <span>({data.date})</span>}
        </h3>
        <h4>{data.tech.join(', ')}</h4>
      </div>
      <div className="links">
        {data.liveUrl && <Link link={data.liveUrl} text={liveText} />}
        {data.liveUrl && data.githubUrl && <span> | </span>}
        {data.githubUrl && <Link link={data.githubUrl} text='github' />}
        {data.albumUrl && <Link link={data.albumUrl} text='link' />}
      </div>
    </div>
  )
}