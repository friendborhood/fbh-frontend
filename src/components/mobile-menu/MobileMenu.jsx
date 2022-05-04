import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { GLOBAL_SCARLET } from '../../GlobalStyling';
import { PAGES } from '../../pages/consts';
import MenuOption from './MenuOption';
import { updateMenuDisplay } from '../../Store/store';

const StyledMenu = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  z-index: 1003;
  width: 50%;
  height: 100%;
  flex-direction: column;
  background-color: white;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-top: 30px; // remove after headline added

  color: ${GLOBAL_SCARLET};

  & div {
    &.options-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const BlackScreen = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  z-index: 1002;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: rgba(0,0,0, 0.6);
  color: ${GLOBAL_SCARLET};


`;

function MobilMenu() {
  const dispatch = useDispatch();

  const backgroundClickHandler = () => {
    dispatch(updateMenuDisplay(false));
  };
  return (
    <>
      <StyledMenu>
        <div className="options-container">
          <MenuOption label="About" navigateTo={PAGES.HOME} />
          <MenuOption label="Login" navigateTo={PAGES.LOGIN} />
          <MenuOption label="Sign up" navigateTo={PAGES.SIGN_UP} />
        </div>
      </StyledMenu>
      <BlackScreen onClick={backgroundClickHandler} />
    </>
  );
}

export default MobilMenu;
