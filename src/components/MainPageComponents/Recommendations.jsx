/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { RecommendationCard } from './RecommendationCard';
import Nitzan from '../../images/mock/Nitzan.png';

const StyledRecommendations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 4%;
    padding-bottom: 8%;
    width: 100vw;
    gap: 43px;
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
`;

export const Recommendations = () => {
  return (
    <StyledRecommendations>
      <h1>Why Users love Friendborhood</h1>
      <div className="cards-container">
        <RecommendationCard name="Nitzan Fridman" image={Nitzan} content="A Great website to find stuff you need easily, and help the planet a little bit on the way" />
        <RecommendationCard />
        <RecommendationCard />
      </div>
    </StyledRecommendations>
  );
};
