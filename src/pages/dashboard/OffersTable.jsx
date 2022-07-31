import React, { useState } from 'react';
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

  const fetchOffersHandler = async () => {
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
  };
  const items = offers.map((offer, index) => <ItemCard offerData={offer} key={index} />);
  return (
    <div>
      <button type="button" onClick={fetchOffersHandler}>Click to get offers!</button>
      <OfferTableStyle>
        {items || 'No offers found'}
      </OfferTableStyle>

    </div>
  );
}

export default OffersTable;
