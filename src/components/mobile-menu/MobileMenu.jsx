/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PAGES } from '../../pages/consts';
import MenuOption from './MenuOption';
import { updateMenuDisplay } from '../../Store/store';
import info from '../../images/info.svg';
import login from '../../images/login.svg';
import signup from '../../images/sign-up.svg';
import x from '../../images/x.svg';
import fox from '../../images/icon-removebg.png';
import { StyledMenu, BlackScreen } from './utils';

function MobileMenu() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);
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
          {!userName && (
          <>
            <MenuOption label="Login" icon={login} navigateTo={PAGES.LOGIN} />
            <MenuOption label="Sign up" icon={signup} navigateTo={PAGES.SIGN_UP} />
          </>
          )}
        </div>
        <img className="cameo" src={fox} alt="fox" />
      </StyledMenu>
      <BlackScreen onClick={closingHandler} />
    </>
  );
}

export default MobileMenu;
