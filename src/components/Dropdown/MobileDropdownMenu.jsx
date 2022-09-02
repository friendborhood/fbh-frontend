/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateSortDisplay } from '../../Store/store';
import {
  DARK_GRAY, GLOBAL_FONT, MOBILE_STYLE, SECONDARY_BACKGROUND,
} from '../../GlobalStyling';
import { BlackScreen } from '../mobile-menu/utils';
import close from '../../images/x.svg';

const StyledMobileDropdownMenu = styled.div`
position: absolute;
display: default;
width: 100%;
z-index: 1002;
bottom: 0;
font-family: 'Heebo';
font-style: normal;
font-weight: 400;

& ul {
  position: ${(props) => (props.isMobile ? 'absolute' : 'none')};
  display: ${(props) => (props.isMobile && props.showMenu ? 'default' : 'none')};
  width: 100%;
  z-index: 1003;
  background-color: white;
  margin: 0;
  bottom: 0;
  padding-top: 27px;
  padding-bottom: 27px;
  border-radius: 8px;
  transition: 0.2s ease-out;

  &.active {
    display: default;
   transform: ${(props) => (props.showMenu ? 'translateY(0%)' : 'translateY(100%)')};
  }
}

& div {
  &.headline {
    display: ${(props) => (props.isMobile ? 'flex' : 'none')};
    flex: row;
  }

  & p {
    color: ${DARK_GRAY};
    font-size: 20px;
    line-height: 29px;  
  }
}
`;

export function MobileDropdownMenu({
  options, chosen = '', setChosen, showMenu,
}) {
  const dispatch = useDispatch();
  const isOpen = true;
  const firstlyClicked = true;
  const closeScreen = () => {
    dispatch(updateSortDisplay(false));
  };

  return (
    <>
      { isMobile && <p>{`Sorting by ${chosen}`}</p>}
      {showMenu && <BlackScreen onClick={closeScreen} />}
      <StyledMobileDropdownMenu isMobile={isMobile} showMenu={showMenu}>
        (
        <ul className={`dropdown-content ${firstlyClicked ? `dropdown_content--animated dropdown_menu-0 ${showMenu ? 'active' : ''}` : ''} ${isOpen ? 'open' : 'close'}`}>
          <div className="headline">
            <p>Sort by</p>
            <img src={close} alt="close menu" />
          </div>
          {options.map((option) => (
            <li
              value={option}
              key={option}
              onClick={() => {
                localStorage.setItem('sortMethod', option);
                setChosen(option);
                dispatch(updateSortDisplay(false));
              }}
              className={chosen === option ? 'chosen' : ''}
            >
              {option}
            </li>
          ))}
        </ul>
        )
      </StyledMobileDropdownMenu>
    </>
  );
}
