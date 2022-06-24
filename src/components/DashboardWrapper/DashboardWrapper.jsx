import styled from 'styled-components';
import CategoryMenu from '../Categories/CategoryMenu';

const StyledDashboardWrapper = styled.main`
  width: 100%;
  position: absolute;
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
