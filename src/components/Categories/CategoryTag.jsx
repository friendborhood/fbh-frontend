/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import styled from 'styled-components';
import { GLOBAL_FONT, GLOBAL_SCARLET, MOBILE_STYLE } from '../../GlobalStyling';

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
    font-size: clamp(1vw, 1vw, 20px);
    line-height: 29px;
    transition: font-size 0.1s ease;
    transition: background-color 0.1s ease;
    cursor: pointer;
    background-color: ${(props) => (props.isChosen ? GLOBAL_SCARLET : 'white')};
    opacity: ${(props) => (props.isChosen ? 1 : 0.15)};
    border: 1.5px solid ${(props) => (props.isChosen ? GLOBAL_SCARLET : '#14171C')};
    color: ${(props) => (props.isChosen ? 'white' : 'black')};
    user-select: none;
    @media only screen and (max-width: ${MOBILE_STYLE.max_width})
    {
      height: 37px;
      font-size: 14px;
      line-height: 21px;
      justify-content: space-around;
      white-space: nowrap;
    }
    & img {
        width: 17px;
        height: 17px;
        filter: ${(props) => (props.isChosen
    ? 'invert(100%) sepia(0%) saturate(7484%) hue-rotate(217deg) brightness(200%) contrast(106%)'
    : 'invert(0%) sepia(13%) saturate(7448%) hue-rotate(41deg) brightness(5%) contrast(93%)')};
    }
`;

export function CategoryTag({
  icon, name, setValue, value,
}) {
  const selectedCategoriesFromLocalStorage = JSON.parse(localStorage.getItem('selectedCategories'));
  const [selected, setSelected] = useState(
    selectedCategoriesFromLocalStorage ? selectedCategoriesFromLocalStorage[name] : true,
  );
  const onClickHandler = () => {
    setSelected(!selected);
    setValue({ ...value, [name]: !selected });
    if (!localStorage.getItem('selectedCategories')) {
      localStorage.setItem('selectedCategories', JSON.stringify({ [name]: true }));
    } else {
      const currentSelectionState = JSON.parse(localStorage.getItem('selectedCategories'));
      currentSelectionState[name] = !currentSelectionState[name];
      localStorage.setItem('selectedCategories', JSON.stringify(currentSelectionState));
    }
  };
  return (
    <StyledCategory
      onClick={onClickHandler}
      isChosen={selected}
    >
      <img src={icon} alt="icon" />
      <div>{name}</div>
    </StyledCategory>
  );
}
