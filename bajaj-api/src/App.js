
import React, { useState } from 'react';
import JsonInput from './components/input';
import OptionsDropdown from './components/OptionsDropdown';
import ResponseDisplay from './components/ResponseDisplay';

const App = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };

    return (
        <div className="App">
            <h1>Pranav Jayaraj - 21BRS1190</h1>
            <JsonInput setResponse={setResponse} setError={setError} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {response && (
                <div>
                    <OptionsDropdown handleOptionChange={handleOptionChange} />
                    <ResponseDisplay response={response} selectedOptions={selectedOptions} />
                </div>
            )}
        </div>
    );
};

export default App;
