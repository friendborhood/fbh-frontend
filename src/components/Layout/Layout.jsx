import styled from 'styled-components';
import MainNavigation from './MainNavigation';

const StyledLayout = styled.div`
`;

function Layout({ children }) {
  return (
    <StyledLayout>
      <MainNavigation />
      <main>{children}</main>
    </StyledLayout>
  );
}

export default Layout;
