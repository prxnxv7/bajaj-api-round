import React from 'react';

const ResponseDisplay = ({ response, selectedOptions }) => {
    if (!response) return null;

    const selectedValues = selectedOptions.map(option => option.value);
    const filteredResponse = {
        numbers: response.numbers,
        alphabets: response.alphabets,
        highest_lowercase_alphabet: response.highest_lowercase_alphabet,
    };

    return (
        <div>
            {selectedValues.includes('Numbers') && (
                <div>
                    <h3>Numbers</h3>
                    <pre>{JSON.stringify(filteredResponse.numbers, null, 2)}</pre>
                </div>
            )}
            {selectedValues.includes('Alphabets') && (
                <div>
                    <h3>Alphabets</h3>
                    <pre>{JSON.stringify(filteredResponse.alphabets, null, 2)}</pre>
                </div>
            )}
            {selectedValues.includes('Highest lowercase alphabet') && (
                <div>
                    <h3>Highest Lowercase Alphabet</h3>
                    <pre>{JSON.stringify(filteredResponse.highest_lowercase_alphabet, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ResponseDisplay;
