/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { GLOBAL_FONT } from '../../GlobalStyling';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0px;
    width: 330px;
    height: 381px;
    background-color: white;
    filter: drop-shadow(0px 0px 10px rgba(20, 23, 28, 0.1));
    border-radius: 17px;
    flex: none;
    flex-grow: 0;
    & img {
        &.item {
            flex: none;
            width: 330px;
            height: 280px;
            background: url(block2_760x570.png);
            border-radius: 17px 17px 0px 0px;
            order: 0;
            flex-grow: 0;
        }
        &.user-icon {
            width: 30px;
            height: 30px;
            border-radius: 40px;
        }
    }
    & div {
        display: flex;
        &.text {           
            font-family: ${GLOBAL_FONT};
            font-style: normal;
            line-height: 29px;
        }
        &.user-info {
            gap: 8px;
        }
        &.small {
            font-weight: 500;
            font-size: 16px;
            line-height: 23.5px;
            color: #14171C;
        }
        &.large {
            font-weight: 600;
            font-size: 20px;
        }
        &.gray {
            font-weight: 500;
            font-size: 20px;
            color: #99A0A9;
        }
        &.item-details {
            flex-direction: column;
            gap: 8px;
            padding: 16px;
        }
        &.info-line {
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;
const image = require('../../images/mock/vacume.png');
const me = require('../../images/mock/square-photo.jpg');

function ItemCard() {
  const name = 'Omer Arzi';
  const itemName = 'Vaccum Cleaner';
  const price = 6;
  const distance = 0.1;
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
