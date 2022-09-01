import React from 'react';
import styled from 'styled-components';
import pan from '../../images/pan.png';
import { GLOBAL_FONT, MOBILE_STYLE } from '../../GlobalStyling';

const HeroStyle = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 55vh;
    @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
      justify-content: space-between;
    }

    & div.content {
        display: flex;
        flex-direction: row;
        width: 100vw;
        align-items: center;
        justify-items: center;
        margin-top: -4%;
        
        & div.text-content {
            display: flex;
            flex-direction: column;
            width: 100vw;
            & h1 {
                width: 670px;
                font-family: 'Anomalia ML v2 AAA';
                text-transform: uppercase;
                font-style: normal;
                font-weight: 700;
                font-size: 64px;
                line-height: 79px;
                color: #14171C;
                 @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
                  font-size: 20px;
                  font-weight: 700;
                  line-height: 100%;
                  width: 100%;
                  padding: 0 20px;
                 }

            }

            & p.description {
                max-width: 55%;
                font-family: ${GLOBAL_FONT};
                font-style: normal;
                font-weight: 400;
                font-size: 19px;
                line-height: 34px;
                color: #99A0A9;
            }
        }

        & img {
            width: 400px;
            height: 400px;
            z-index: 1;
            @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
              width: 200px;
              height: 200px;
          }
        }
    }
`;

export function Hero() {
  return (
    <HeroStyle>
      <div className="content">
        <div className="text-content">
          <h1>share stuff easily with people around you</h1>
          <p className="description">
            Just click, upload and share.
            <br />
          </p>
        </div>
        <img src={pan} alt="" />
      </div>
    </HeroStyle>
  );
}
