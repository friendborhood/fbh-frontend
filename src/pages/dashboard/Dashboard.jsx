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

const DashboardPage = styled.div`
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

  return (
    <DashboardWrapper>
      <DashboardPage>
        {/* <ItemCard /> */}
      </DashboardPage>
    </DashboardWrapper>

  // <form>
  //   <BoxInput
  //     label="Select radius"
  //     id="radius"
  //     state={radius}
  //     setState={setRadius}
  //     placeHolder="radius"
  //   />
  //   <button
  //     type="button"
  //     onClick={async () => {
  //       const { data: fetchedOffers } = await network.get(
  //         `${END_POINTS.OFFERS}/in-area`,
  //         { params: { radius } },
  //       );
  //       setOffers(fetchedOffers);
  //     }}
  //   >

  //     Click me for offers

  //   </button>
  //   <div>
  //     {' '}
  //     there are
  //     {' '}
  //     {offers.length}
  //     {' '}
  //     offers , all offers:
  //     {JSON.stringify(offers)}
  //   </div>
  // </form>
  );
}

export default Dashboard;
