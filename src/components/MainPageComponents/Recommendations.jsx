/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { RecommendationCard } from './RecommendationCard';

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
`;

export const Recommendations = () => {
  return (
    <StyledRecommendations>
      <h1>Why Users love Friendborhood</h1>
      <div className="cards-container">
        <RecommendationCard />
      </div>
    </StyledRecommendations>
  );
};
