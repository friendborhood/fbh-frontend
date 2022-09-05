/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from './style';
import { network, END_POINTS } from '../../network';
import { displayMessage } from '../../utils/handle-device-middleware';

const fallBackImage = require('../../images/mock/fallback.png');

const handleDeleteOffer = async (offerId) => {
  try {
    await network.delete(`${END_POINTS.OFFERS}/${offerId}`);
    displayMessage('offer deleted successfully');
  } catch (error) {
    displayMessage('error deleting offer');
  }
};
const patchOffer = async (offerId, newState) => {
  try {
    await network.patch(`${END_POINTS.OFFERS}/${offerId}`, { state: newState });
    displayMessage(`offer changed to ${newState} successfully`);
  } catch (error) {
    displayMessage('error changing offer state');
  }
};
function ItemCard({ myOffers, offerData }) {
  const {
    imageUrl,
    itemData,
    offererUserData,
    distanceFromUser,
    name,
    priceAsked: price,
    description,
    id,
    state,
  } = offerData;
  let itemName;
  if (itemData) {
    ({ itemName } = itemData);
  }
  const [flipped, setFlipped] = useState(false);
  const {
    phoneNumber, email, firstName, lastName, imageUrl: offererUserIconUrl,
  } = offererUserData;
  const distance = (distanceFromUser / 1000).toFixed(2);
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <Card disabled={state === 'Disabled' && true} onClick={() => setFlipped(!flipped)}>
        <img
          src={imageUrl || fallBackImage}
          alt="item"
          className="item"
        />
        <div className="item-details">
          <div className="info-line">
            <div className="text large">{itemName}</div>
            {(!myOffers && <div className="text small">{`${distance} km`}</div>)}
            <div className="text small">{state}</div>
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
      <Card onClick={() => setFlipped(!flipped)}>
        {!myOffers ? (
          <h4>
            {' '}
            {`Contact ${firstName}: \n ${phoneNumber ? `\n phone number is ${phoneNumber}` : ''} ${email ? `\n email is ${email}` : ''}`}
          </h4>
        ) : (
          <>
            <br />
            <br />
            <br />
            <button type="button" onClick={() => handleDeleteOffer(id)}>Delete Offer</button>
            <br />
            <br />
            <br />
            <br />
            <button type="button" onClick={() => patchOffer(id, state === 'Disabled' ? 'Available' : 'Enabled')}>{`${state === 'Disabled' ? 'Enable' : 'Disable'} Offer`}</button>
          </>
        )}
        {!myOffers && (
        <div className="item-details">
          <div className="info-line">
            <div className="text large">{itemName}</div>
            <div className="text large">{`${distance} km`}</div>
          </div>
          <div className="info-line">
            <div className="text user-info">
              <img className="user-icon" src={offererUserIconUrl} alt="" />
              <div className="medium">{`${firstName} ${lastName}`}</div>
            </div>
            <div className="text large">{`${price}₪/hour`}</div>
          </div>
        </div>
        )}
      </Card>
    </ReactCardFlip>
  );
}

export default ItemCard;
