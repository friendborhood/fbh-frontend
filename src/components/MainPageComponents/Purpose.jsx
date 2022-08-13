/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React from 'react';
import styled from 'styled-components';
import box from '../../images/box.svg';
import handshake from '../../images/handshake.svg';
import planet from '../../images/Planet.svg';

const StyledPurpose = styled.div`
  display: flex;
  height: 35vh;
  width: 100vw;
  justify-content: center;

  & div {
    &.display-box {
      display: flex;
      flex-direction: row;
      width: 90vw;
      height: 100%;
      background-color: rgba(159, 166, 174, 0.1);
      justify-content: space-evenly;
      border-radius: 8px;

      & div.essence {
        display: flex;
        flex-direction: column;
        gap: 6%;
        justify-content: center;
        align-items: center;

        & h2 {
          font-family: 'Anomalia ML v2 AAA';
          text-transform: uppercase;
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 45px;
        }

        & p {
          width: 80%;
          white-space: normal;
          font-family: 'Heebo';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 29px;
          text-align: center;
          color: #000000;
        }

        & img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
`;

export const Purpose = () => {
  return (
    <StyledPurpose>
      <div className="display-box">
        <div className="essence">
          <img src={box} alt="" />
          <h2>Save space</h2>
          <p>{"One man's trash is another's treasure"}</p>
        </div>
        <div className="essence">
          <img src={handshake} alt="" />
          <h2>Be friendly</h2>
          <p>{'Get to know the community around you'}</p>
        </div>
        <div className="essence">
          <img src={planet} alt="" />
          <h2>Save the planet</h2>
          <p>{'Help the environment and mother nature'}</p>
        </div>
      </div>
    </StyledPurpose>
  );
};
