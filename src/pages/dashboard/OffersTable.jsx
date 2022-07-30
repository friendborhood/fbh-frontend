import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { network, END_POINTS } from '../../network';
import ItemCard from '../../components/ItemCard/ItemCard';

const OfferTableStyle = styled.div`
display: flex;
  gap: 15px;
  flex-wrap: wrap;
  gap: 40px;
  padding-left: 23px;
  padding-right: 21px;
  overflow-y: scroll;
  height: 100%;
  justify-content: center;
`;

function OffersTable({ radius }) {
  const [offers, setOffers] = useState([]);

  useEffect(async () => {
    const sortMethod = localStorage.getItem('sortMethod');
    const params = { radius };
    if (sortMethod === 'Newest First') {
      params.newest = true;
    }
    console.log(JSON.stringify(params));
    const { data } = await network.get(
      `${END_POINTS.OFFERS}/in-area`,
      { params },
    );
    setOffers(data);
  }, [offers]);

  if (offers.length) {
    const items = offers.map((offer, index) => <ItemCard offerData={offer} key={index} />);
    return (
      <OfferTableStyle>
        {items}
      </OfferTableStyle>
    );
  }
  return <div><h1>Currently No Offers In your area :( </h1></div>;
}

export default OffersTable;
