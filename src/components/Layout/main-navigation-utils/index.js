import styled from 'styled-components';
import {
  GLOBAL_FONT, GLOBAL_LIGHTGRAY, GLOBAL_SCARLET, MOBILE_STYLE,
} from '../../../GlobalStyling';

export const MainNavigationStyle = styled.div`
  display: flex;
  position: sticky;
  z-index: 100;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 127px;

  @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
    flex-direction: row-reverse;
    height: ${MOBILE_STYLE.NAVIGATION_MOBILE_HEIGHT};
    padding-right: ${MOBILE_STYLE.navigation_padding};
    padding-left: ${MOBILE_STYLE.navigation_padding};
  }

  & section {
    gap: 50px;

    & img {

      &.hamburger {
        display: none;
        @media only screen and (max-width: ${MOBILE_STYLE.max_width})
        {
          display: flex;
          height: 30px;
          width: 30px;
        }
      }

      &.logo {
        margin-left:50px;
        width: 190px;
        transform: scale(1);
        transition: transform 0.2s ease;
        @media only screen and (max-width: ${MOBILE_STYLE.max_width})
        {
          width: 105px;
        }
        &:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease;
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
      font-style: ${GLOBAL_FONT};
      @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
          display: none;
      }
      &.menu-item, &.login, &.logout {
        width: 100px;
        cursor: pointer;
        &:active, :hover, :focus {
          transition: color 0.2s ease;
          transition: font-weight 0.1s ease;
          color: ${GLOBAL_SCARLET};
          font-weight: bold;
          font-weight: 500, medium;
        }
      }
    }
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
