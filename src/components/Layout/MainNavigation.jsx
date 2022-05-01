/* eslint-disable import/no-named-default */
import { Link } from 'react-router-dom';
import { PAGES } from '../../pages/consts';
import { MainNavigationStyle } from './main-navigation-utils';
import { default as hamburger } from '../../images/menu-hamburger.svg';

const logo = require('../../images/logo.png');

// TODO: Check active-hover-focus imperfect working

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
