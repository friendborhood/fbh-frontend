// import React, { useState } from 'react';
import styled from 'styled-components';
// import BoxInput from '../../components/BoxInput';
// import { END_POINTS, network } from '../../network';
import { SECONDARY_BACKGROUND } from '../../GlobalStyling';

const DashboardPage = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;  
  background-color: ${SECONDARY_BACKGROUND};
  opacity: 11%;
  border: solid;
`;

function Dashboard() {
  // const [radius, setRadius] = useState(5000);
  // const [offers, setOffers] = useState([]);
  return (
    <DashboardPage>
      <div />
    </DashboardPage>

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
  //       const { data: fetchedOffers } = await network.get(`${END_POINTS.OFFERS}/in-area`,
  // { params: { radius } });
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
