import React, { useState, useContext } from 'react';
import '../App.css'; // Import the CSS file
import { AppContext } from '../context/AppContext';

const CustomDropdown = () => {
  const map = {
    "$": '$ Dollar',
    "£": '£ Pound',
    "€": '€ Euro',
    "₹": '₹ Ruppee',
  }

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(Object.values(map)[1]); // Set default selected value

  const { dispatch, currency } = useContext(AppContext);

  const changeCurrency = (val)=>{
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    })
  }

  const handleClickOutside = (event) => {
    if (!event.target.closest('.custom-dropdown')) {
      setIsOpen(false);
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value, text) => {
    setSelectedValue(text);
    changeCurrency(value)
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown" onClick={handleClickOutside}>
      <span className="selected-value" onClick={handleToggle}>
        Currency ({selectedValue})
      </span>
      {isOpen && (
        <ul className="dropdown-list">
          {Object.entries(map).map(([value, text]) => (
            <li key={value} onClick={() => handleOptionClick(value, text)}>
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
