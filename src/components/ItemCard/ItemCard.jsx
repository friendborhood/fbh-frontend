/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Card } from './style';
import { network, END_POINTS } from '../../network';

const image = require('../../images/mock/vacume.png');
const me = require('../../images/mock/square-photo.jpg');

function ItemCard() {
  const name = 'Omer Arzi';
  const itemName = 'Vaccum Cleaner';
  const price = 6;
  const distance = 0.1;
  useEffect(() => {
    (async () => {
      const { data } = await network.get(
        `${END_POINTS.OFFERS}/in-area`,
        { params: { radius: 100000000000000000000000 } },
      );
      console.log(data);
    })();
  });

  return (
    <Card>
      <img className="item" src={image} alt="Item" />
      <div className="item-details">
        <div className="info-line">
          <div className="text large">{itemName}</div>
          <div className="text gray">{`${distance}km`}</div>
        </div>
        <div className="info-line">
          <div className="text user-info">
            <img className="user-icon" src={me} alt="giver" />
            <div className="text">{name}</div>
          </div>
          <div className="text small">{`${price}$/day`}</div>
        </div>
      </div>
    </Card>
  );
}

export default ItemCard;
