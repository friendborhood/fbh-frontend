/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PAGES } from '../../pages/consts';
import { navigationGrey, GlobalScarlet } from '../../GlobalStyling';

const logo = require('../../images/logo.png');

// TODO: Check active-hover-focus imperfect working
const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 147px;

  & section {
    gap: 50px;

    &.site-info {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      cursor: auto;
      }

    &.user-usage {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-right: 40px;
      cursor: auto;
    }

    & div {
      margin-top: 45px;
      color: ${navigationGrey};
      font-weight: 400, normal;
      font-style: feebo;
      cursor: pointer;
      &:active, &:hover, &:focus {
        color: ${GlobalScarlet};
        font-weight: bold;
        font-weight: 500, medium;
      }
    }

  }
  & img {
    width: 223px;
    height: 102px;
  }

  & a {
    &:link {
      text-decoration: none; 
    }
    &:active, &:hover, &:focus {
        color: ${GlobalScarlet};
        font-weight: bold;
        font-weight: 500, medium;
    }
  }
`;

function MainNavigation() {
  return (
    <StyledDiv>
      <section className="site-info">
        <img src={logo} alt="logo" />
        <div>About</div>
        <div>System</div>
      </section>
      <section className="user-usage">
        <Link to={PAGES.SIGN_UP}><div>Sign-up</div></Link>
        <Link to={PAGES.LOGIN}><div className="login">Login</div></Link>
      </section>
    </StyledDiv>
  );
}

export default MainNavigation;
