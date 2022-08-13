import styled from 'styled-components';
import { SECONDARY_BACKGROUND, MOBILE_STYLE } from '../../GlobalStyling';
import CategoryMenu from '../Categories/CategoryMenu';

const StyledDashboardWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh -${MOBILE_STYLE.NAVIGATION_MOBILE_HEIGHT});
  animation: colorize 0.2s linear;
  @keyframes colorize {
    0% {background-color: inherit;}
    100% {background-color: ${SECONDARY_BACKGROUND};}
  }
`;

function DashboardWrapper() {
  return (
    <StyledDashboardWrapper>
      <CategoryMenu />
      {/* {children} */}
    </StyledDashboardWrapper>
  );
}

export default DashboardWrapper;
