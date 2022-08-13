/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';

const StyledRecommendationCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(159, 166, 174, 0.1);
    border-radius: 8px;
    width: 517px;
    height: 318px;

    & div {
        &.details-container {
            display: flex;
            flex-direction: row;

            & p {
                font-family: 'Heebo';
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 41px;
                color: #14171C;
            }
        }
    }
`;

export const RecommendationCard = ({
  content, name, image,
}) => {
  return (
    <StyledRecommendationCard>
      <p className="content">{content}</p>
      <div className="details-container">
        <img src={image} alt="" />
        <p>{`"${name}"`}</p>
      </div>
    </StyledRecommendationCard>
  );
};
