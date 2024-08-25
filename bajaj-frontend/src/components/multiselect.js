import React from 'react';

const Dropdown = ({ options, selectedOptions, onChange }) => {
  return (
    <select multiple={true} value={selectedOptions} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
