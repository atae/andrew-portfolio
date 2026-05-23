import React from 'react';

export default function Transcriptions({ pageColor, content }) {
  return (
    <div className={`transcriptions-container ${pageColor}-background-font`}>
      <h1>Sheet Music</h1>
      <div className="transcriptions-list">
        {content.map((sheet, i) => (
          <div key={i} className="transcription-row">
            <div className="transcription-info">
              <span className="transcription-title">{sheet.title}</span>
              <span className="transcription-source">{sheet.source}</span>
              <span className="transcription-instrument">{sheet.instrument}</span>
            </div>
            <div className="transcription-links">
              <a href={sheet.pdfSrc} target="_blank" rel="noopener noreferrer">view</a>
              <a href={sheet.pdfSrc} download>download</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
