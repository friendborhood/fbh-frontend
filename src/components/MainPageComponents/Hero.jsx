import React from 'react';
import { isMobile } from 'react-device-detect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { GLOBAL_FONT, MOBILE_STYLE } from '../../GlobalStyling';

const ITEMS_GIF_LINK = 'http://drive.google.com/uc?export=view&id=16IPLEPLkCFyOsXkRd_k_S464DoFQmgnf';

const HeroStyle = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 65vh;
    @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
      height: 35vh;
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
            align-items: flex-start;
            padding-left: 10%;
            width: 50vw;
            flex-grow: 1;

            @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
              font-size: 20px;
              font-weight: 700;
              line-height: 100%;
              width: 50vw;
              align-items: flex-start;
              padding-left: 5%;
            }
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
                @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
                  font-size: 20px;
                  line-height: 100%;
                }
            }
        }
        
        & div.img-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-grow: 1;
          width: 50vw;
          & img {
            position: relative;
            width: 40%;
            height: 40%;
            z-index: 2;
            @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
              width: 200px;
              height: 200px;
            }
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
        <div className="img-container">
          <LazyLoadImage
            alt="side image"
            effect="opacity"
            src={ITEMS_GIF_LINK}
            style={{ width: isMobile ? '35vw' : '20vw', height: isMobile ? '35vw' : '20vw' }}
          />
        </div>
      </div>
    </HeroStyle>
  );
}
