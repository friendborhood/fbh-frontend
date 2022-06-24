import styled from 'styled-components';
import { SECONDARY_BACKGROUND } from '../../GlobalStyling';
import CategoryMenu from '../Categories/CategoryMenu';

const StyledDashboardWrapper = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${SECONDARY_BACKGROUND};
`;

function DashboardWrapper({ children }) {
  return (
    <StyledDashboardWrapper>
      <CategoryMenu />
      {children}
    </StyledDashboardWrapper>
  );
}

export default DashboardWrapper;
