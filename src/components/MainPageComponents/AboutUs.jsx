/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import { GLOBAL_FONT, GLOBAL_SCARLET } from '../../GlobalStyling';

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

    & h1 {
            width: 100vw;
            font-family: 'Anomalia ML v2 AAA';
            text-transform: uppercase;
            font-style: normal;
            font-weight: 700;
            font-size: 64px;
            color: white;
            margin-bottom: 40px;
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

        &.bold {
            font-weight: 700;
        }
    }
`;

export const AboutUs = () => {
  return (
    <StyledAboutUs>
      <h1>About Us</h1>
      <p>
        Overconsumption is a big problem.
        We buy so many items and just store them for a long time, while rarely actually using them.
        <b>Obvious Solution? Sharing!</b>
      </p>
      <p />
      <p>
        Using Friendborhood’s platform,
        users can easily find and offer items to and from people nearby.
        Friendborhood is saving money for its users,
        freeing them from the hassle of buying and storing items they rarely use.
      </p>

    </StyledAboutUs>
  );
};
