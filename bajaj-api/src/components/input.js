// src/components/JsonInput.js
import React, { useState } from 'react';
import axios from 'axios';

const JsonInput = ({ setResponse, setError }) => {
    const [jsonInput, setJsonInput] = useState('');

    const handleJsonInputChange = (e) => {
        setJsonInput(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            // Validate JSON
            const jsonData = JSON.parse(jsonInput);

            if (!jsonData.data || !Array.isArray(jsonData.data)) {
                throw new Error('Invalid JSON structure');
            }

            // Call the backend API
            const res = await axios.post('https://your-backend-url/bfhl', jsonData);
            setResponse(res.data);
            setError('');
        } catch (err) {
            setError(err.message);
            setResponse(null);
        }
    };

    return (
        <div>
            <textarea
                value={jsonInput}
                onChange={handleJsonInputChange}
                placeholder='Enter JSON here...'
                rows="4"
                cols="50"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default JsonInput;
