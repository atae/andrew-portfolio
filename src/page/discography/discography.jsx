import React, { useState, useEffect } from 'react';
import Card from '../portfolio/card';

export default function Discography({ pageColor, content }) {
  const [tab, setTab] = useState(() => localStorage.getItem('discography-tab') || 'published');

  const handleSetTab = (newTab) => {
    localStorage.setItem('discography-tab', newTab);
    setTab(newTab);
  };

  useEffect(() => {
    const handlePlay = (e) => {
      document.querySelectorAll('audio').forEach(audio => {
        if (audio !== e.target) audio.pause();
      });
    };
    document.addEventListener('play', handlePlay, true);
    return () => document.removeEventListener('play', handlePlay, true);
  }, []);

  return (
    <div className={`discography-container ${pageColor}-background-font`}>
      <div className="disc-tabs">
        <button
          className={`disc-tab ${pageColor}-background-font ${tab === 'published' ? 'active' : ''}`}
          onClick={() => handleSetTab('published')}
        >
          Releases
        </button>
        <button
          className={`disc-tab ${pageColor}-background-font ${tab === 'jams' ? 'active' : ''}`}
          onClick={() => handleSetTab('jams')}
        >
          Jams
        </button>
      </div>
      <div className="portfolio">
        {content[tab].map((data, i) => <Card key={i} data={data} pageColor={pageColor} />)}
      </div>
    </div>
  );
}
