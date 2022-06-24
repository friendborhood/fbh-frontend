/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { CustomDropdown } from './style';
import dropdownarrow from '../../images/dropdown-arrow.svg';

export function Dropdown({ options, chosen = '', setChosen }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = async () => {
    setIsOpen(!isOpen);
  };

  return (
    <CustomDropdown isOpen={isOpen}>
      <button className="dropbtn" onClick={onClickHandler}>
        <div>{chosen}</div>
        <img src={dropdownarrow} alt="arrow" className={isOpen ? 'open' : 'close'} />
      </button>
      <ul className={`dropdown-content dropdown_content--animated dropdown_menu-6 ${isOpen ? 'open' : 'close'}`}>
        {options.map((option) => <li>{option}</li>)}
      </ul>
    </CustomDropdown>
  );
}
