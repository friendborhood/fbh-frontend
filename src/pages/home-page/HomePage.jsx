/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import styled from 'styled-components';
import { Hero } from '../../components/MainPageComponents/Hero';
import { Purpose } from '../../components/MainPageComponents/Purpose';
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
      <QuartSphere />
      <Hero />
      <Purpose />
      <Shared />
    </>
  );
}

export default HomePage;
