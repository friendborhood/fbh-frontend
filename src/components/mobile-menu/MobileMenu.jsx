import React from 'react';
import styled from 'styled-components';
import { GLOBAL_SCARLET } from '../../GlobalStyling';
import { PAGES } from '../../pages/consts';
import MenuOption from './MenuOption';

export const StyledMenu = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: ${GLOBAL_SCARLET};
`;

function MobilMenu() {
  return (
    <StyledMenu>
      <MenuOption label="About" navigateTo={PAGES.HOME} />
    </StyledMenu>

  );
}

export default MobilMenu;
