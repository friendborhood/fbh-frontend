/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { click } from '@testing-library/user-event/dist/click';
import CategoryMenu from '../../components/Categories/CategoryMenu';
import DashboardWrapper from '../../components/DashboardWrapper/DashboardWrapper';
import ItemCard from '../../components/ItemCard/ItemCard';
import BoxInput from '../../components/BoxInput';
import { END_POINTS, network } from '../../network';
import { SECONDARY_BACKGROUND, MOBILE_STYLE } from '../../GlobalStyling';
import OffersTable from './OffersTable';

const DashboardStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  @media only screen and (max-width: ${MOBILE_STYLE.max_width})
  {
    bottom: calc(${MOBILE_STYLE.NAVIGATION_MOBILE_HEIGHT} - 10vh);
    height: 78.7vh;
  }
  overflow-y: hidden;
  overflow-y: scroll;
`;

function Dashboard() {
  const [radius, setRadius] = useState(5000);
  const [offers, setOffers] = useState([]);
  const [sortMethod, setSortMethod] = useState(localStorage.getItem('sortMethod') || 'Newest First');
  return (
    <DashboardWrapper>
      <DashboardStyle>
        <OffersTable sortMethod={sortMethod} radius={radius} />
      </DashboardStyle>
    </DashboardWrapper>
  );
}

export default Dashboard;
