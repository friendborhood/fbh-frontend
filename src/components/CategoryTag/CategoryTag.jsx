import React, { useState } from 'react';
import styled from 'styled-components';
import { GLOBAL_FONT, GLOBAL_SCARLET } from '../../GlobalStyling';

const StyledCategory = styled.div`
    display: inline-flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    border-radius: 70px;
    padding: 8px 16px;
    gap:8px;
    max-height: 45px;
    font-family: ${GLOBAL_FONT};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    cursor: pointer;
    background-color: ${(props) => (props.isChosen ? GLOBAL_SCARLET : 'white')};
    border: 1.5px solid ${(props) => (props.isChosen ? GLOBAL_SCARLET : '#14171C')};
    color: ${(props) => (props.isChosen ? 'white' : '#black')};
    user-select: none;
    & img {
        width: 17px;
        height: 17px;
        filter: ${(props) => (props.isChosen ? 'invert(100%) sepia(0%) saturate(7484%) hue-rotate(217deg) brightness(200%) contrast(106%)' : '')};
    }
`;

export function CategoryTag({ icon, name }) {
  const [isChosen, setIsChosen] = useState(false);

  const handleClick = () => {
    setIsChosen(!isChosen);
  };
  return (
    <StyledCategory onClick={handleClick} isChosen={isChosen}>
      <img src={icon} alt="icon" />
      <div>{name}</div>
    </StyledCategory>
  );
}
