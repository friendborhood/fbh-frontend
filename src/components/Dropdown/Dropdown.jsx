/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useSelector, useDispatch } from 'react-redux';
import { CustomDropdown } from './style';
import dropdownarrow from '../../images/dropdown-arrow.svg';
import { updateSortDisplay } from '../../Store/store';
import { GLOBAL_SCARLET } from '../../GlobalStyling';

export function Dropdown({
  options, chosen = '', setChosen, mobileDisplay = chosen, backgroundColor = GLOBAL_SCARLET,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [firstlyClicked, setFirstlyClicked] = useState(false);
  const dispatch = useDispatch();

  const onClickHandler = async () => {
    setIsOpen(!isOpen);
    setFirstlyClicked(true);
    dispatch(updateSortDisplay(true));
  };

  return (
    <CustomDropdown
      isMobile={isMobile}
      isOpen={isOpen}
      firstClick={firstlyClicked}
      backgroundColor={backgroundColor}
    >
      <button style={isMobile ? { width: 180 } : {}} className="dropbtn" onClick={onClickHandler}>
        <div className="button-display">{ chosen}</div>
        <img src={dropdownarrow} alt="arrow" className={isOpen ? 'open' : 'close'} />
      </button>

      <ul className={`dropdown-content ${firstlyClicked ? 'dropdown_content--animated dropdown_menu-0' : ''} ${isOpen ? 'open' : 'close'}`}>
        {options.map((option) => (
          <li
            value={option}
            key={option}
            onClick={() => {
              setChosen(option);
              setIsOpen(false);
            }}
            className={chosen === option ? 'chosen' : ''}
          >
            {option}
          </li>
        ))}
      </ul>

    </CustomDropdown>
  );
}
