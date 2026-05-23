import React from 'react';

export default function Goals({pageColor, content}) {
  return (
    <div className={`goals-container ${pageColor}-background-font`}>
      <h1>Quest Log</h1>
      <div className="quest-categories">
        {content.map((category, i) => (
          <div key={i} className="quest-category">
            <h2>{category.category}</h2>
            <ul>
              {category.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
