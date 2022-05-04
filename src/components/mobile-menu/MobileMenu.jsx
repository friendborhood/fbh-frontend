/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-named-default */
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { MOBILE_STYLE } from '../../GlobalStyling';
import { PAGES } from '../../pages/consts';
import MenuOption from './MenuOption';
import { updateMenuDisplay } from '../../Store/store';
import { default as info } from '../../images/info.svg';
import { default as login } from '../../images/login.svg';
import { default as signup } from '../../images/sign-up.svg';
import { default as x } from '../../images/x.svg';
import { default as fox } from '../../images/icon-removebg.png';

const StyledMenu = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  z-index: 1003;
  width: 50%;
  height: 100%;
  flex-direction: column;
  background-color: white;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;


  & div {
    &.options-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
    }

    &.x-container {
      display: flex;
      padding-left: ${MOBILE_STYLE.navigation_padding};
      height: ${MOBILE_STYLE.NAVIGATION_MOBILE_HEIGHT};
      margin-bottom: 50px;
    }

  }
  & img.cameo {
    align-self: center;
    margin-top: 50px;
    height: 60px;
    width: 60px;
  }
`;

const BlackScreen = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  z-index: 1002;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: rgba(0,0,0, 0.6);
`;

function MobilMenu() {
  const dispatch = useDispatch();

  const closingHandler = () => {
    dispatch(updateMenuDisplay(false));
  };
  return (
    <>
      <StyledMenu>
        <div className="x-container">
          <img src={x} alt="exit" onClick={closingHandler} />
        </div>
        <div className="options-container">
          <MenuOption label="About" icon={info} navigateTo={PAGES.HOME} />
          <MenuOption label="Login" icon={login} navigateTo={PAGES.LOGIN} />
          <MenuOption label="Sign up" icon={signup} navigateTo={PAGES.SIGN_UP} />
        </div>
        <img className="cameo" src={fox} alt="fox" />
      </StyledMenu>
      <BlackScreen onClick={closingHandler} />
    </>
  );
}

export default MobilMenu;
