import React from 'react';

function ResponseLengthDisplay({ response }) {
  return (
    <div style={{ marginTop: 5 }}>
      {response && (
        <div>
          {/* Response length: {response.length} */}
        </div>
      )}
    </div>
  );
}

export default ResponseLengthDisplay;
