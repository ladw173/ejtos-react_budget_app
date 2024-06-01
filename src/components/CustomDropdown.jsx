import React, { useState } from 'react';
import '../App.css'; // Import the CSS file

const currencies = ['$ Dollar', '€ Euro', '¥ Yen', '₹ Rupee']; // Desired format

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(currencies[0]); // Set default selected value

  const handleClickOutside = (event) => {
    if (!event.target.closest('.custom-dropdown')) {
      setIsOpen(false);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (event) => {
    setSelectedValue(event.target.textContent);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown" onClick={handleClickOutside}>
      <span className="selected-value" onClick={handleToggle}>
        Currency ({selectedValue})
      </span>
      {isOpen && (
        <ul className="dropdown-list">
          {currencies.map((option) => (
            <li key={option} onClick={handleOptionClick}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
