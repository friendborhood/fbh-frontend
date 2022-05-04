/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable import/no-named-default */
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Hamburger from 'hamburger-react';
import { useDispatch } from 'react-redux';
import { PAGES } from '../../pages/consts';
import { MainNavigationStyle } from './main-navigation-utils';
import { default as hamburger } from '../../images/menu-hamburger.svg';
import { updateMenuDisplay } from '../../Store/store';

const logo = require('../../images/logo.png');

function MainNavigation() {
  const dispatch = useDispatch();

  const onHamburgerClicked = () => {
    dispatch(updateMenuDisplay(true));
  };

  return (
    <MainNavigationStyle>
      <section className="site-info">
        <Link to={PAGES.HOME}><img src={logo} className="logo" alt="logo" /></Link>
        <div className="menu-item">About</div>
        <div className="menu-item">System</div>
      </section>
      <section className="user-usage">
        <img src={hamburger} className="hamburger" alt="menu-button" onClick={onHamburgerClicked} />
        <Link to={PAGES.SIGN_UP}><div className="menu-item">Sign-up</div></Link>
        <Link to={PAGES.LOGIN}><div className="login">Login</div></Link>
      </section>
    </MainNavigationStyle>
  );
}

export default MainNavigation;
