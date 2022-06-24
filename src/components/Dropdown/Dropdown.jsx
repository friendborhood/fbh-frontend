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
          transition: transform 300ms ease;
        }
        &.close {
          transform : rotate(0deg);
          transition: transform 300ms ease;
        }
      }
  }
  & ul {
    &.dropdown-content {
      position: relative;
      top: 100%;
      width: 100%;
      perspective: 1000px;
      display: none;
      background-color: white;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      border-radius: 70px; 
      margin-top: 10px;
    }
    &.dropdown_content--animated {
      display: block;
    }
    &.dropdown_menu-6{
      animation: ${(props) => (props.isOpen ? 'growDown 300ms ease-in-out forwards' : 'growUp 200ms ease-out forwards')};
      transform-origin: top center;
    }

    @keyframes growDown {
      0% {
        transform: scaleY(0)
      }
      80% {
        transform: scaleY(0.7)
      }
      100% {
        transform: scaleY(1)
      }
    }
    @keyframes growUp {
      0% {
        transform: scaleY(1)
      }
      80% {
        transform: scaleY(1.1)
      }
      100% {
        transform: scaleY(0)
      }
    }
  }
`;
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
