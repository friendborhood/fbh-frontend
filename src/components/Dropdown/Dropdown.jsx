/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import styled from 'styled-components';
import { GLOBAL_FONT, GLOBAL_SCARLET } from '../../GlobalStyling';
import dropdownarrow from '../../images/dropdown-arrow.svg';

const CustomDropdown = styled.div`
  & button {
      display: flex;
      position: relative;
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
  & div {
    &.dropdown-content {
      position: relative;
        display: ${(props) => (props.isOpen ? 'flex' : 'flex')};
        height: ${(props) => (props.isOpen ? '100px' : '0')};
        transition: height 0.2s ease;
        margin-top: 10px;
        background-color: white;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
  }
`;
export function Dropdown({ chosen = '', setChosen }) {
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
      <div className="dropdown-content">
        <div />
      </div>
    </CustomDropdown>
  );
}
