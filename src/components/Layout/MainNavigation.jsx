/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { PAGES } from '../../pages/consts';
import { MainNavigationStyle } from './main-navigation-utils';
import hamburger from '../../images/menu-hamburger.svg';
import { updateMenuDisplay, updateLogoutState } from '../../Store/store';
import { redirectLoggedOutUser } from '../../user-manager/logout-user';
import { fetchUserData } from '../../network';

const logo = require('../../images/fbh-logo.png');

function MainNavigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const userName = useSelector((state) => state.auth.userName);
  const [userImg, setUserImg] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => Promise.all([fetchUserData({ setUserName, setImageUrl: setUserImg })]));
  const onHamburgerClicked = () => {
    dispatch(updateMenuDisplay(true));
  };
  const logoutHandler = () => {
    dispatch(updateLogoutState());
    navigate(PAGES.LOGIN, { replace: true });
  };
  redirectLoggedOutUser();
  console.log(userName);

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
              <img style={{ maxHeight: 100, maxWidth: 100 }} src={userImg} alt="" />
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
