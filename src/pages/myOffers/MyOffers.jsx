/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SECONDARY_BACKGROUND, MOBILE_STYLE } from '../../GlobalStyling';
import OffersTable from '../dashboard/OffersTable';

const MyOffersStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${SECONDARY_BACKGROUND};
  @media only screen and (max-width: ${MOBILE_STYLE.max_width})
  {
    bottom: calc(${MOBILE_STYLE.NAVIGATION_MOBILE_HEIGHT} - 10vh);
    height: 78.7vh;
  }
  overflow-y: scroll;
`;

function MyOffers() {
  return (
    <MyOffersStyle>
      <OffersTable myOffers />
    </MyOffersStyle>
  );
}

export default MyOffers;
