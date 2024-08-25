import React, { useState } from 'react';
import axios from 'axios';
import InputForm from './components/InputForm';
import Dropdown from './components/Dropdown';
import ResponseDisplay from './components/ResponseDisplay';

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleDataSubmit = async (data) => {
    try {
      const result = await axios.post('https://your-backend-url.vercel.app/api/bfhl', data);
      setResponse(result.data);
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  const handleDropdownChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedOptions(options);
  };

  return (
    <div className='App'>
      <h1>React Frontend for API</h1>
      <InputForm onDataSubmit={handleDataSubmit} />
      {response && (
        <>
          <Dropdown
            options={['Alphabets', 'Numbers', 'Highest lowercase alphabet']}
            selectedOptions={selectedOptions}
            onChange={handleDropdownChange}
          />
          <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;
