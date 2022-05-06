import React, { useState } from 'react';
import BoxInput from '../../components/BoxInput';
import { END_POINTS, network } from '../../network';
import { useEffectOrLogout } from '../../user-manager/logout-user';

function Dashboard() {
  useEffectOrLogout();
  const [radius, setRadius] = useState(5000);
  const [offers, setOffers] = useState([]);
  return (
    <form>
      <BoxInput
        label="Select radius"
        id="radius"
        state={radius}
        setState={setRadius}
        placeHolder="radius"
      />
      <button
        type="button"
        onClick={async () => {
          const { data: fetchedOffers } = await network.get(`${END_POINTS.OFFERS}/in-area`, { params: { radius } });
          setOffers(fetchedOffers);
          alert(JSON.stringify(fetchedOffers, null, 2));
        }}
      >

        Click me for offers

      </button>
      <div>
        {' '}
        there are
        {' '}
        {offers.length}
        {' '}
        offers , all offers:
        {JSON.stringify(offers)}
      </div>
    </form>
  );
}

export default Dashboard;
