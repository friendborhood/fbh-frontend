/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../../pages/consts';
import MenuOption from './MenuOption';
import { updateMenuDisplay, updateLogoutState } from '../../Store/store';
import info from '../../images/info.svg';
import login from '../../images/login.svg';
import signup from '../../images/sign-up.svg';
import x from '../../images/x.svg';
import fox from '../../images/icon-removebg.png';
import logout from '../../images/logout.svg';
import userInfo from '../../images/your-info.svg';
import dashboard from '../../images/dashboard.svg';
import addItem from '../../images/add-item-icon.svg';
import myItems from '../../images/my-items.svg';
import { StyledMenu, BlackScreen } from './utils';

function MobileMenu(props) {
  const {
    showMobileMenu,
  } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector((state) => state.auth.userName);

  const closingHandler = () => {
    dispatch(updateMenuDisplay(false));
  };

  const navigateTo = (dest) => {
    closingHandler();
    navigate(dest);
  };

  const logoutHandler = (dest) => {
    dispatch(updateLogoutState());
    navigateTo(dest);
  };
  return (
    <>
      <StyledMenu showMobileMenu={showMobileMenu}>
        <div className="x-container">
          <img src={x} alt="exit" onClick={closingHandler} />
        </div>
        <div className="options-container">
          {`Hello, ${userName || 'guest'}`}
          <MenuOption label="About" icon={info} onClick={navigateTo} param={PAGES.ABOUT_US} />
          {userName
            ? (
              <>
                <MenuOption label="Rent Items" icon={dashboard} onClick={navigateTo} param={PAGES.DASHBOARD} />
                <MenuOption label="My Items" icon={myItems} onClick={navigateTo} param={PAGES.MY_OFFERS} />
                <MenuOption label="Add Item" icon={addItem} onClick={navigateTo} param={PAGES.UPLOAD_OFFER} />
                <MenuOption label="Your Info" icon={userInfo} onClick={navigateTo} param={PAGES.ADDITIONAL_DETAILS} />
                <MenuOption label="Logout" icon={logout} onClick={logoutHandler} param={PAGES.LOGIN} />
              </>
            )
            : (
              <>
                <MenuOption label="Login" icon={login} onClick={navigateTo} param={PAGES.LOGIN} />
                <MenuOption label="Sign up" icon={signup} onClick={navigateTo} param={PAGES.SIGN_UP} />
              </>
            )}
        </div>
        <img className="cameo" src={fox} alt="fox" />
      </StyledMenu>
      {showMobileMenu && <BlackScreen onClick={closingHandler} />}
    </>
  );
}

export default MobileMenu;
