import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MOBILE_STYLE } from '../../GlobalStyling';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import BACKGROUND_IMG from '../../images/page-background-image.png';

export const StyledBackground = styled.div`
  display: flex;
  position: absolute;
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

function HalfPageImage() {
  return (
    <StyledBackground>
      <LazyLoadImage
        alt="side image"
        effect="opacity"
        src={BACKGROUND_IMG}
        style={
        {
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }
      }
      />
    </StyledBackground>
  );
}

export default HalfPageImage;
