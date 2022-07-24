import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { network, END_POINTS } from '../../network';
import ItemCard from '../../components/ItemCard/ItemCard';

const OfferTableStyle = styled.div`
display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding-left: 23px;
  padding-right: 21px;
  overflow-y: scroll;
  height: 100%;
`;

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
    <OfferTableStyle>
      {items}
    </OfferTableStyle>
  );
}

export default OffersTable;
