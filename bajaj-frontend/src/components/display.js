import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
  const filterResponse = (key) => {
    if (!selectedOptions.includes(key)) return null;
    return response[key] ? response[key].join(', ') : 'None';
  };

  return (
    <div>
      <h2>Response:</h2>
      <p><strong>Numbers:</strong> {filterResponse('numbers')}</p>
      <p><strong>Alphabets:</strong> {filterResponse('alphabets')}</p>
      <p><strong>Highest Lowercase Alphabet:</strong> {filterResponse('highest_lowercase_alphabet')}</p>
    </div>
  );
};

export default ResponseDisplay;
