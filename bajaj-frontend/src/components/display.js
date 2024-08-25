import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResponseDisplay = ({ response, selectedOptions }) => {
    const [displayData, setDisplayData] = useState({});

    useEffect(() => {
        if (response && selectedOptions.length > 0) {
            const selectedData = {};
            selectedOptions.forEach(option => {
                selectedData[option] = response[option] || [];
            });
            setDisplayData(selectedData);
        }
    }, [response, selectedOptions]);

    const renderResponse = () => {
        if (!response) return <p>No response data available.</p>;

        return (
            <div className="response-container">
                {Object.entries(displayData).map(([key, value]) => (
                    <div key={key} className="response-section">
                        <h3 className="response-title">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                        {value.length > 0 ? (
                            <pre className="response-data">{JSON.stringify(value, null, 2)}</pre>
                        ) : (
                            <p>No data available for {key}</p>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="response-display">
            {renderResponse()}
        </div>
    );
};

export default ResponseDisplay;
