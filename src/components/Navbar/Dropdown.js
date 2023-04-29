import React, { useState } from "react";

function Dropdown(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    props.onSelect(event.target.value); // pass the selected value to the parent component
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
