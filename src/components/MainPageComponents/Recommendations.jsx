/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { RecommendationCard } from './RecommendationCard';
import Nitzan from '../../images/mock/Nitzan.png';
import { GLOBAL_FONT, GLOBAL_SCARLET } from '../../GlobalStyling';

const StyledRecommendations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 4%;
    padding-bottom: 8%;
    width: 100vw;
    gap: 75px;
    margin-bottom: 10%;
    & h1 {
      width: 100vw;
      font-family: 'Anomalia ML v2 AAA';
      text-transform: uppercase;
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 79px;
    }

    & div.cards-container {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      gap: 5%;
    }

    & button {
      width: 212px;
      height: 45px;
      left: 854px;
      top: 3505px;
      background-color: ${GLOBAL_SCARLET};
      border-radius: 8px;
      font-family: ${GLOBAL_FONT};
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      color: #FFFFFF;
    }
`;

export const Recommendations = () => {
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
        <RecommendationCard />
        <RecommendationCard />
      </div>
      <button type="button">Sign Up</button>
    </StyledRecommendations>
  );
};
