/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card } from './style';
import { network, END_POINTS } from '../../network';

const image = require('../../images/mock/vacume.png');
const me = require('../../images/mock/square-photo.jpg');

function ItemCard({ offerData }) {
  console.log(offerData);
  const {
    description: itemName, distanceFromUser, name, priceAsked: price,
  } = offerData;
  const distance = distanceFromUser.toFixed(2);
  return (
    <Card>
      <img className="item" src={image} alt="Item" />
      <div className="item-details">
        <div className="info-line">
          <div className="text large">{itemName}</div>
          <div className="text gray">{`${distance}meters`}</div>
        </div>
        <div className="info-line">
          <div className="text user-info">
            {/* <img className="user-icon" src={me} alt="giver" /> */}
            <div className="text">{name}</div>
          </div>
          <div className="text small">{`${price}$/day`}</div>
        </div>
      </div>
    </Card>
  );
}

export default ItemCard;
