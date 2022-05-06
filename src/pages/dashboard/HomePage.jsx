import React, { useState } from 'react';
import { END_POINTS, network } from '../../network';
import { useEffectOrLogout } from '../../user-manager/logout-user';

function Dashboard() {
  useEffectOrLogout();
  const [radius] = useState(5000);
  return (
    <div>
      <button
        type="button"
        onClick={async () => {
          const { data: offers } = await network.get(`${END_POINTS.OFFERS}/in-area`, { params: { radius } });
          alert(JSON.stringify(offers, null, 2));
        }}
      >

        Click me for offers

      </button>
    </div>
  );
}

export default Dashboard;
