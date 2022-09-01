/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import { AboutUs } from '../../components/MainPageComponents/AboutUs';
import { Hero } from '../../components/MainPageComponents/Hero';
import { Purpose } from '../../components/MainPageComponents/Purpose';
import { Recommendations } from '../../components/MainPageComponents/Recommendations';
import { Shared } from '../../components/MainPageComponents/Shared';

const QuartSphere = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
  width: 40vw;
  height: 50vh;
  border-bottom-left-radius: 100%;
  background-color: rgba(170, 170, 170, 0.1);
`;

function HomePage() {
  return (
    <>
      {!isMobile && <QuartSphere />}
      <Hero />
      <Purpose />
      <Shared />
      <AboutUs />
      <Recommendations />
    </>
  );
}

export default HomePage;
