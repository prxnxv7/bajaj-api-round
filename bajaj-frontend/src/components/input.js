import React, { useState } from 'react';
import axios from 'axios';

const JsonInput = ({ setResponse, setSelectedOptions }) => {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        try {
            const parsedInput = JSON.parse(jsonInput);
            const result = await axios.post('http://localhost:3000/bfhl', parsedInput);
            setResponse(result.data);
            setError('');
        } catch (err) {
            setError('Invalid JSON format or API error');
            setResponse(null);
        }
    };

    const handleSelectChange = (e) => {
        setSelectedOptions(Array.from(e.target.selectedOptions, option => option.value));
    };

    return (
        <div className="json-input-container">
            <form onSubmit={handleSubmit}>
                <textarea
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder='Enter JSON here'
                    rows='10'
                    cols='50'
                    className="json-textarea"
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {isSubmitted && (
                <div className="dropdown-container">
                    <select multiple onChange={handleSelectChange} className="dropdown">
                        <option value='numbers'>Numbers</option>
                        <option value='alphabets'>Alphabets</option>
                        <option value='highest_lowercase_alphabet'>Highest Lowercase Alphabet</option>
                    </select>
                </div>
            )}
        </div>
    );
};

export default JsonInput;
