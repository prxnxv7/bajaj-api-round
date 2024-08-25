import React from 'react';
import Select from 'react-select';

const OptionsDropdown = ({ handleOptionChange }) => {
    return (
        <Select
            isMulti
            options={[
                { value: 'Numbers', label: 'Numbers' },
                { value: 'Alphabets', label: 'Alphabets' },
                { value: 'Highest lowercase alphabet', label: 'Highest lowercase alphabet' }
            ]}
            onChange={handleOptionChange}
        />
    );
};

export default OptionsDropdown;
