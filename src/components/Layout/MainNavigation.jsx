/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PAGES } from '../../pages/consts';
import { MainNavigationStyle } from './main-navigation-utils';
import hamburger from '../../images/menu-hamburger.svg';
import { updateMenuDisplay, updateLogoutState } from '../../Store/store';
import { redirectLoggedOutUser } from '../../user-manager/logout-user';

const logo = require('../../images/fbh-logo.png');

function MainNavigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.auth.userName);
  const onHamburgerClicked = () => {
    dispatch(updateMenuDisplay(true));
  };
  const logoutHandler = () => {
    dispatch(updateLogoutState());
    navigate(PAGES.LOGIN, { replace: true });
  };
  redirectLoggedOutUser();

  return (
    <MainNavigationStyle>
      <section className="site-info">
        <Link to={PAGES.HOME}><img src={logo} className="logo" alt="logo" /></Link>
        <div className="menu-item">About</div>
      </section>
      <section className="user-usage">
        <img src={hamburger} className="hamburger" alt="menu-button" onClick={onHamburgerClicked} />
        {!userName
          ? (
            <>
              <Link to={PAGES.SIGN_UP}><div className="menu-item">Sign-up</div></Link>
              <Link to={PAGES.LOGIN}><div className="login">Login</div></Link>
            </>
          )
          : (
            <>
              <div>{`Welcome, ${userName}`}</div>
              <Link to={PAGES.DASHBOARD}><div className="menu-item">Dashboard</div></Link>
              <Link to={PAGES.ADDITIONAL_DETAILS}><div className="menu-item">Your Info</div></Link>
              <Link to={PAGES.UPLOAD_OFFER}><div className="menu-item">Add Item</div></Link>
              <div className="logout" onClick={logoutHandler}>Logout</div>
            </>
          )}
      </section>
    </MainNavigationStyle>
  );
}

export default MainNavigation;
