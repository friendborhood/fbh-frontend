/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { GLOBAL_FONT, MOBILE_STYLE } from '../../GlobalStyling';

const StyledRecommendationCard = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: rgba(159, 166, 174, 0.1);
    border-radius: 8px;
    width: 517px;
    height: 318px;
    align-content: space-between;
    padding-left: 40px;
    @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
      transform: scale(0.8);
    }

    & p.content {
        font-family: ${GLOBAL_FONT};
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 41px;
        color: #14171C;
        padding-top: 13px;
        text-align: left;
        padding-right: 10px;
        padding: 30px 40px 10px 0;
    }

    & div {
        &.details-container {
            position: absolute;
            bottom: 0;
            justify-content: space-between;
            display: flex;

            & p {
                font-family: ${GLOBAL_FONT};
                font-style: normal;
                font-weight: 400;
                font-size: 28px;
                line-height: 41px;
                display: flex;
                align-items: center;
                color: #99A0A9;
            }

            & img {
                width: 30px;
                height: 30px;
                border-radius: 40px;
                margin-right: 30px;
            }
        }
    }
`;

export const RecommendationCard = ({
  content, name, image, location,
}) => {
  return (
    <StyledRecommendationCard>
      <p className="content">{`"${content}"`}</p>
      <div className="details-container">
        <img src={image} alt="" />
        <p>{`${name}, ${location}`}</p>
      </div>
    </StyledRecommendationCard>
  );
};
