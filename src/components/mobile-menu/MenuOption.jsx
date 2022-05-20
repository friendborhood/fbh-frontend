/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { MOBILE_STYLE } from '../../GlobalStyling';
// import { updateMenuDisplay } from '../../Store/store';

export const StyledOption = styled.div`
    display: flex;
    color: ${MOBILE_STYLE.MENU_ITEM_COLOR};
    background-color: inherit;
    font-family: 'Heebo';
    font-weight: 400;
    width: 100%;
    padding-left: 10px;

    & div {
      &.icon-container {
        display: flex;
        width: 30px;
      }
    }
`;

function MenuOption(props) {
  const {
    label, onClick, icon, param,
  } = props;

  const onClickHandler = () => {
    onClick(param);
  };

  return (
    <StyledOption role="button" onClick={onClickHandler}>
      <div className="icon-container">
        <img src={icon} alt={`${label} icon`} />
      </div>
      <div>{label}</div>
    </StyledOption>
  );
}

export default MenuOption;
