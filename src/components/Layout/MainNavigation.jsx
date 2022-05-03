/* eslint-disable max-len */
/* eslint-disable import/no-named-default */
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Hamburger from 'hamburger-react';
import { PAGES } from '../../pages/consts';
import { MainNavigationStyle } from './main-navigation-utils';
// import { GLOBAL_SCARLET } from '../../GlobalStyling';
import { default as hamburger } from '../../images/menu-hamburger.svg';

const logo = require('../../images/logo.png');

function MainNavigation() {
  return (
    <MainNavigationStyle>
      <section className="site-info">
        <Link to={PAGES.HOME}><img src={logo} className="logo" alt="logo" /></Link>
        <div className="menu-item">About</div>
        <div className="menu-item">System</div>
      </section>
      <section className="user-usage">
        <img src={hamburger} className="hamburger" alt="menu-button" />
        <Link to={PAGES.SIGN_UP}><div className="menu-item">Sign-up</div></Link>
        <Link to={PAGES.LOGIN}><div className="login">Login</div></Link>
      </section>
    </MainNavigationStyle>
  );
}

export default MainNavigation;
