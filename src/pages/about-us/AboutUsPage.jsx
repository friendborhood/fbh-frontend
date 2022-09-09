/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import styled from 'styled-components';
import { GLOBAL_FONT, GLOBAL_SCARLET, MOBILE_STYLE } from '../../GlobalStyling';
import Daniel from '../../images/mock/Daniel.jpeg';
import Gery from '../../images/mock/Gery.jpeg';
import Arzi from '../../images/mock/Arzi2.jpeg';

const AboutUsStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  font-family: 'Heebo';
  right: 0;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 0.5%;

  @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
    padding-top: 2%;
    padding-left: 6px;
    padding-top: 0;
  }

  & h1.page-headline {
      width: 100vw;
      font-family: 'Anomalia ML v2 AAA';
      text-transform: uppercase;
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      color: ${GLOBAL_SCARLET};
      margin-bottom: 40px;
      margin-bottom: 10px;
      @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
        font-size: 20px;
        padding-left: 20px;
        padding-top: 10px;
        line-height: 100%;
      }
    }

    & p {
        font-family: ${GLOBAL_FONT};
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 41px;
        color: black;
        text-align: left;

        @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
          font-size: 14px;
          line-height: 130%;
          padding: 0 5%;
        }

        &.bold {
            font-weight: 700;
        }
    }

    & div.person-card {
        display: flex;
        flex-direction: row;
        width: 30%;
        height: 20%;
        border: solid 1.5px ${GLOBAL_SCARLET};
        border-top-left-radius: 120px;
        border-bottom-left-radius: 120px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        margin-bottom: 15px;
        /* justify-content: space-between; */

        @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
            width: 90vw;
            height: 15%;
        }

        & div.img-container {
            height: 100%;
            width: 32%;
            min-width: 200px;
            border-top-left-radius: inherit;
            border-bottom-left-radius: inherit;
            @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
              min-width: 150px;
              }

            & img {
              width: 100%;
              height: 100%;
              min-width: inherit;
              border-top-left-radius: inherit;
              border-bottom-left-radius: inherit;
            }
        }
        & div.info {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          width: 30%;
          color: black;
          flex: 2;
          padding-left: 25px;
          height: 100%;

          & h1 {
            font-family: 'Anomalia ML v2 AAA';
            font-size: 29px;
            margin-bottom: 0;
            font-weight: 600;
            color: black;
            @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
              font-size: 25px;
            }
          }

          & h2 {
            font-family: 'Anomalia ML v2 AAA';
            font-size: 20px;
            margin-bottom: 0;
            color: black;
            @media only screen and (max-width: ${MOBILE_STYLE.max_width}){
              font-size: 16px;
            }
          }
        }
    }
`;

function AboutUsPage() {
  return (
    <AboutUsStyle>
      <h1 className="page-headline">About Us</h1>
      <p>
        Overconsumption is a big problem.
      </p>
      <p>
        We buy so many items and just store them for a long time, while rarely actually using them.
      </p>
      <p><b> Obvious Solution? Sharing!</b></p>
      <p />
      <p>
        Using Friendborhood’s platform,
        users can easily find and offer items to and from people nearby.
      </p>
      <p>
        Friendborhood is saving money for its users,
        freeing them from the hassle of buying and storing items they rarely use.
      </p>
      <br />
      <div className="person-card">
        <div className="img-container">
          <img src={Daniel} alt="" />
        </div>
        <div className="info">
          <h1>Daniel Dolev</h1>
          <h2>Backend Developer</h2>
        </div>
      </div>
      <div className="person-card">
        <div className="img-container">
          <img src={Gery} alt="" />
        </div>
        <div className="info">
          <h1>Omer Gery</h1>
          <h2>Backend Developer & CI/CD</h2>
        </div>
      </div>
      <div className="person-card">
        <div className="img-container">
          <img src={Arzi} alt="" />
        </div>
        <div className="info">
          <h1>Omer Arzi</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div>
    </AboutUsStyle>
  );
}

export default AboutUsPage;
