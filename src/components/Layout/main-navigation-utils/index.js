import styled from 'styled-components';
import { GLOBAL_LIGHTGRAY, GLOBAL_SCARLET, MOBILE_STYLE } from '../../../GlobalStyling';

export const MainNavigationStyle = styled.div`
  display: flex;
  position: relative;
  z-index: 100;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 127px;
  border: solid red; 

  @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
    width: 100%;
    flex-direction: row-reverse;
    height: 68px;
    padding-right: ${MOBILE_STYLE.navigation_padding};
    padding-left: ${MOBILE_STYLE.navigation_padding};
  }

  & section {
    gap: 50px;

    & img {
      border: solid blue;

      &.hamburger {
        @media only screen and (min-width: var(${MOBILE_STYLE.max_width} +1))
        {
          display: none;
        }
        height: 30px;
        width: 30px;
      }

      &.logo {
        @media only screen and (max-width: ${MOBILE_STYLE.max_width})
        {
          width: 100px;
          height: 46px;
        }
      }     
    }

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
      color: ${GLOBAL_LIGHTGRAY};
      font-weight: 400, normal;
      font-style: feebo;

      &.menu-item, &.login {
        @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
          display: none;
        }
      }

      cursor: pointer;
      &:active, :hover, :focus {
        color: ${GLOBAL_SCARLET};
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
        color: ${GLOBAL_SCARLET};
        font-weight: bold;
        font-weight: 500, medium;
    }
  }
`;
