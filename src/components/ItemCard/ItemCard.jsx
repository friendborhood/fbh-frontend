/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card } from './style';
import { network, END_POINTS } from '../../network';

const fallBackImage = require('../../images/mock/fallback.png');
const me = require('../../images/mock/square-photo.jpg');

function ItemCard({ offerData }) {
  console.log(offerData);
  const {
    imageUrl,
    itemData,
    offererUserData,
    distanceFromUser,
    name,
    priceAsked: price,
    description,
  } = offerData;
  const { itemName } = itemData;
  const { firstName, lastName, imageUrl: offererUserIconUrl } = offererUserData;
  const distance = (distanceFromUser / 1000).toFixed(2);
  return (
    <Card>
      <img
        src={imageUrl || fallBackImage}
        alt="item"
        className="item"
      />
      <div className="item-details">
        <div className="info-line">
          <div className="text large">{itemName}</div>
          <div className="text small">{`${distance} km`}</div>
        </div>
        <div className="info-line">
          <div className="text user-info">
            <img className="user-icon" src={offererUserIconUrl} alt="" />
            <div className="text">{`${firstName} ${lastName}`}</div>
          </div>
          <div className="text small">{`${price}₪/hour`}</div>
        </div>
      </div>
    </Card>
  );
}

export default ItemCard;
