/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { GLOBAL_FONT } from '../../GlobalStyling';

const StyledFooter = styled.footer`
  display: flex;
  position: sticky;
  background-color: transparent;
  flex-direction: column;
  height: 88px;
  justify-content: center;
  font-family: ${GLOBAL_FONT};
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  bottom: 0;
  opacity:30%;
  pointer-events: none;
  & div {
      &.rights{
        margin-left:32px;   
      }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="rights">© 2022 FriendBorHood</div>
    </StyledFooter>
  );
}

export default Footer;
