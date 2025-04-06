// components/Card.jsx
import React from 'react';

const Card = ({ imagePath, title, text, tags, height = 'auto' }) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg content-center`} style={{ height }}>
      <img src={imagePath} alt="Card" className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
