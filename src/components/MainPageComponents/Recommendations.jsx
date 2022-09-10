/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { RecommendationCard } from './RecommendationCard';
import Nitzan from '../../images/mock/Nitzan.png';
import irad from '../../images/mock/irad.jpg';
import shahar from '../../images/mock/shahar.jpeg';
import { GLOBAL_FONT, GLOBAL_SCARLET, MOBILE_STYLE } from '../../GlobalStyling';
import { PAGES } from '../../pages/consts';

const StyledRecommendations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 2% 0;
    width: 100vw;
    gap: 75px;
    margin-bottom: 10%;
    @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
      gap: 0;
    }

    & h1 {
      width: 100vw;
      font-family: 'Anomalia ML v2 AAA';
      text-transform: uppercase;
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 79px;

      @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
        font-size: 20px;
      }
    }

    & div.cards-container {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 2%;
      @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
        overflow-x: visible;
      }
    }

    & button {
      width: 212px;
      height: 45px;
      background-color: ${GLOBAL_SCARLET};
      border-radius: 8px;
      font-family: ${GLOBAL_FONT};
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      font-weight: 600;
      color: #FFFFFF;

      @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
        font-size: 14px;
        width: 141px;
        height: 37px;
      }
    }
`;

export const Recommendations = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate(PAGES.SIGN_UP, { replace: true });
  };

  return (
    <StyledRecommendations>
      <h1>Why Users love Friendborhood</h1>
      <div className="cards-container">
        <RecommendationCard
          name="Nitzan"
          image={Nitzan}
          content="My boyfriend Ziv and I don't have a lot free space in our garage,
        and thank to friendborhood we borrow items only when we need."
          location="Nirit"
        />
        <RecommendationCard
          name="Irad"
          image={irad}
          content="Great website- serve it's purpose and easy to use."
          location="Rosh Ha'Ayin"
        />
        <RecommendationCard
          name="Shahar"
          image={shahar}
          content="Great idea, wish it will be mass-used so it will fulfill full potential."
          location="Tel Aviv"
        />
      </div>
      <button type="button" onClick={goToSignUp}>Sign Up</button>
    </StyledRecommendations>
  );
};
