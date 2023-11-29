// ResponseDisplay.js
import React from 'react';

const ResponseDisplay = ({ response }) => {
  return (
    <div>
      {response.map((friend, index) => (
        <div key={index}>
          <p>Name: {friend.name}</p>
          <p>Availability: {friend.availability}</p>
        </div>
      ))}
    </div>
  );
};

export default ResponseDisplay;
