/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
  const [userImg, setUserImg] = useState('');
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState({});

  useEffect(() => fetchUserData({ setUserData, setUserName, setImageUrl: setUserImg }), []);
  const onHamburgerClicked = () => {
    dispatch(updateMenuDisplay(true));
  };
  const logoutHandler = () => {
    dispatch(updateLogoutState());
    fetchUserData({ setUserData, setUserName, setImageUrl: setUserImg });
    navigate(PAGES.LOGIN, { replace: true });
  };
  redirectLoggedOutUser();
  console.log(userName);

  return (
    <MainNavigationStyle>
      <section className="site-info">
        <Link to={PAGES.HOME}><img src={logo} className="logo" alt="logo" /></Link>
        { !isMobile && <Link to={PAGES.ABOUT_US}><div className="menu-item">About</div></Link>}
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
              {!isMobile && (
                <LazyLoadImage
                  alt="side image"
                  effect="opacity"
                  src={userImg}
                  style={
                    {
                      objectFit: 'cover',
                      width: '45px',
                      height: '45px',
                      'border-radius': '40px',
                    }
                  }
                />
              )}
              <div>{userData.firstName ? `Welcome, ${userData.firstName}` : ''}</div>
              <Link to={PAGES.ADDITIONAL_DETAILS}><div className="menu-item">Your Info</div></Link>
              <Link to={PAGES.DASHBOARD}><div className="menu-item">Rent Items</div></Link>
              <Link to={PAGES.UPLOAD_OFFER}><div className="menu-item">Add Item</div></Link>
              <Link to={PAGES.MY_OFFERS}><div className="menu-item">My Items</div></Link>
              <div className="logout" onClick={logoutHandler}>Logout</div>
            </>
          )}
      </section>
    </MainNavigationStyle>
  );
}

export default MainNavigation;
