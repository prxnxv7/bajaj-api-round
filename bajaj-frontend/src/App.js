import React, { useState } from 'react';
import JsonInput from './components/input';
import ResponseDisplay from './components/display';
import './App.css';

function App() {
    const [response, setResponse] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <div className="app-container">
            <h1 className="app-title">Pranav Jayaraj - 21BRS1190 - 18/05/2003</h1>
            <JsonInput setResponse={setResponse} setSelectedOptions={setSelectedOptions} />
            <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </div>
    );
}

export default App;
