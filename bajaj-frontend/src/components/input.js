import React, { useState } from 'react';
import axios from 'axios';

const InputForm = ({ onDataSubmit }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setJsonInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonInput);
      setError('');
      onDataSubmit(parsedData);
    } catch (e) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={handleInputChange}
          placeholder='Enter JSON here'
          rows='5'
          cols='50'
        />
        <button type='submit'>Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default InputForm;
