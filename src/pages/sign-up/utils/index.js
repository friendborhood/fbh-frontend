import styled from 'styled-components';
import BACKGROUND_IMG from '../../../images/page-background-image.png';
import { MOBILE_STYLE } from '../../../GlobalStyling';

export const StyledBackground = styled.div`
  position: absolute;
  background-image: url(${BACKGROUND_IMG});
  background-size: cover;
  right: 0;
  width: 50%;
  height: 100%;
  top: 0;
  bottom: 0;

  @media only screen and (max-width: ${MOBILE_STYLE.max_width})
  {
    display: none;
  }
`;
