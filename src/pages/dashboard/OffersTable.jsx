import React, { useEffect, useState } from 'react';
import { network, END_POINTS } from '../../network';
import ItemCard from '../../components/ItemCard/ItemCard';

function OffersTable({ radius }) {
  const [offers, setOffers] = useState([]);
  useEffect(async () => {
    const { data } = await network.get(
      `${END_POINTS.OFFERS}/in-area`,
      { params: { radius } },
    );
    setOffers(data);
  }, [offers]);
  const items = offers.map((offer) => <ItemCard offerData={offer} />);

  return (
    <div>
      {items}
    </div>
  );
}

export default OffersTable;
