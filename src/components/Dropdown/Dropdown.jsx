/* eslint-disable react/button-has-type */
import { useState } from 'react';
import styled from 'styled-components';
import { GLOBAL_FONT, GLOBAL_SCARLET } from '../../GlobalStyling';
import dropdownarrow from '../../images/dropdown-arrow.svg';

const CustomDropdown = styled.div`
  & button {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;
      min-width: 163px;
      height: 45px;
      background: ${GLOBAL_SCARLET};
      font-family: ${GLOBAL_FONT};
      color: white;
      border-radius: 70px;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 29px;

      & img {
        &.open{
          transform : rotate(180deg);
          transition: transform 0.2s ease;
        }
        &.close {
          transform : rotate(0deg);
          transition: transform 0.2s ease;
        }
      }
  }
`;
export function Dropdown({ chosen = '', setChosen }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(chosen, setChosen);

  const onClickHandler = async () => {
    setIsOpen(!isOpen);
  };
  return (
    <CustomDropdown>
      <button className="dropbtn" onClick={onClickHandler} isOpen={isOpen}>
        <div>{chosen}</div>
        <img src={dropdownarrow} alt="arrow" className={isOpen ? 'open' : 'close'} />
      </button>
      <div className="dropdown-content" />
    </CustomDropdown>
  );
}
