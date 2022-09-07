/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from './style';
import { network, END_POINTS } from '../../network';
import { displayMessage } from '../../utils/handle-device-middleware';
import phone from '../../images/tags/phone.svg';
import emailIcon from '../../images/tags/mail.svg';

const fallBackImage = require('../../images/mock/fallback.png');

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
  const [updatedState, setUpdatedState] = useState(state);

  const handleDeleteOffer = async (offerId) => {
    try {
      await network.delete(`${END_POINTS.OFFERS}/${offerId}`);
      displayMessage('offer deleted successfully');
      setUpdatedState('Deleted');
    } catch (error) {
      displayMessage('error deleting offer');
    }
  };
  const patchOffer = async (offerId, newState) => {
    try {
      await network.patch(`${END_POINTS.OFFERS}/${offerId}`, { state: newState });
      displayMessage(`offer changed to ${newState} successfully`);
      setUpdatedState(newState);
    } catch (error) {
      displayMessage('error changing offer state');
    }
  };

  const {
    phoneNumber, email, firstName, lastName, imageUrl: offererUserIconUrl,
  } = offererUserData;
  const distance = (distanceFromUser / 1000).toFixed(2);
  return (
    updatedState === 'Deleted' ? null
      : (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
          <Card disabled={updatedState === 'Disabled' && true} onClick={() => setFlipped(!flipped)}>
            <img
              src={imageUrl || fallBackImage}
              alt="item"
              className="item"
            />
            <div className="item-details">
              <div className="info-line">
                <div className="text large">{itemName}</div>
                {(!myOffers && <div className="text small">{`${distance} km`}</div>)}
                <div className="text small">{updatedState}</div>
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
              <>
                <div className="text large" style={{ 'justify-content': 'center', 'padding-top': '10%' }}>
                  Contact Information
                </div>
                <div className="personal-details">
                  <div className="first-row">
                    <div className="name">
                      {`${firstName} ${lastName}`}
                    </div>
                    <div className="phone">
                      <img src={phone} alt="" />
                      {`${phoneNumber}`}
                    </div>
                  </div>
                  <div className="email">
                    <img src={emailIcon} alt="" />
                    {`${email}`}
                  </div>
                </div>
              </>
            ) : (
              <div className="flipped-side">
                <button type="button" className="delete-offer" onClick={() => handleDeleteOffer(id)}>Delete Offer</button>
                <button type="button" className="disable-offer" onClick={() => patchOffer(id, updatedState === 'Disabled' ? 'Available' : 'Disabled')}>{`${updatedState === 'Disabled' ? 'Enable' : 'Disable'} Offer`}</button>
              </div>
            )}
            {/* {!myOffers && (
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
            )} */}
          </Card>
        </ReactCardFlip>
      ));
}

export default ItemCard;
