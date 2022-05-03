/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GLOBAL_SCARLET } from '../../GlobalStyling';
import { updateMenuDisplay } from '../../Store/store';

const StyledOption = styled.div`
    display: flex;
    color: ${GLOBAL_SCARLET};
    background-color: inherit;
    font-family: 'Heebo';
    font-weight: 400;
`;

function MenuOption(props) {
  const {
    label, navigateTo,
  } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    dispatch(updateMenuDisplay(false));
    navigate(navigateTo);
  };

  return (
    <StyledOption role="button" onClick={onClickHandler}>
      <p>{label}</p>
    </StyledOption>
  );
}

export default MenuOption;
