/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import { useState, useEffect } from 'react';
import { CustomDropdown } from './style';
import dropdownarrow from '../../images/dropdown-arrow.svg';

export function Dropdown({ options, chosen = '', setChosen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [firstlyClicked, setFirstlyClicked] = useState(false);

  const onClickHandler = async () => {
    setIsOpen(!isOpen);
    setFirstlyClicked(true);
  };

  useEffect(() => { console.log(isOpen); }, [isOpen]);

  return (
    <CustomDropdown isOpen={isOpen} firstClick={firstlyClicked}>
      <button className="dropbtn" onClick={onClickHandler}>
        <div>{chosen}</div>
        <img src={dropdownarrow} alt="arrow" className={isOpen ? 'open' : 'close'} />
      </button>
      <ul className={`dropdown-content ${firstlyClicked ? 'dropdown_content--animated dropdown_menu-0' : ''} ${isOpen ? 'open' : 'close'}`}>
        {options.map((option) => <li>{option}</li>)}
      </ul>
    </CustomDropdown>
  );
}
