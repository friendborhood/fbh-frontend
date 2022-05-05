import styled from 'styled-components';
import MainNavigation from './MainNavigation';
import { MOBILE_STYLE } from '../../GlobalStyling';

const StyledLayout = styled.main`
  width: 100%;
  @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
    overflow-x: hidden;
  }
  
`;

function Layout({ children }) {
  return (
    <StyledLayout>
      <MainNavigation />
      {children}
    </StyledLayout>
  );
}

export default Layout;
