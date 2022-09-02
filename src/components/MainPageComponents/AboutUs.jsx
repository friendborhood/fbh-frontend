/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { GLOBAL_FONT, GLOBAL_SCARLET, MOBILE_STYLE } from '../../GlobalStyling';
import { PAGES } from '../../pages/consts';

const StyledAboutUs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    /* height: 55vh; */
    padding-top: 6%;
    justify-items: center;
    background-color: ${GLOBAL_SCARLET};
    text-align: center;
    padding-bottom: 10%;
    align-items: center;

    @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
      padding-bottom: 7%;
    }

    & h1 {
      width: 100vw;
      font-family: 'Anomalia ML v2 AAA';
      text-transform: uppercase;
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      color: white;
      margin-bottom: 40px;
      @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
        font-size: 20px;
        line-height: 100%;
      }
    }

    & p {
        font-family: ${GLOBAL_FONT};
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 41px;
        color: #FFFFFF;
        padding-right: 20%;
        padding-left: 20%;
        text-align: left;

        @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
          font-size: 14px;
          line-height: 130%;
          padding: 0 5%;
        }

        &.bold {
            font-weight: 700;
        }
    }

    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      width: 154px;
      height: 45px;
      left: 883px;
      top: 2777px;
      background: #FFFFFF;
      border: 1px solid #14171C;
      color: #14171C;
      border-radius: 8px;
      margin-top: 3%;
      font-weight: 700;

      @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
        font-size: 14px;
        width: 141px;
        height: 37px;
      }
    }
`;

export const AboutUs = () => {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate(PAGES.ABOUT_US, { replace: true });
  };
  return (
    <StyledAboutUs>
      <h1>About Us</h1>
      <p>
        Overconsumption is a big problem.
        We buy so many items and just store them for a long time, while rarely actually using them.
        <b> Obvious Solution? Sharing!</b>
      </p>
      <p />
      {!isMobile && (
        <p>
          Using Friendborhood’s platform,
          users can easily find and offer items to and from people nearby.
          Friendborhood is saving money for its users,
          freeing them from the hassle of buying and storing items they rarely use.
        </p>
      )}
      <button type="button" onClick={goToAbout}>Learn More</button>
    </StyledAboutUs>
  );
};
