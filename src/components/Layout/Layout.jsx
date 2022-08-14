import styled from 'styled-components';
import MainNavigation from './MainNavigation';
import { MOBILE_STYLE } from '../../GlobalStyling';
import Footer from '../Footer/Footer';

const StyledLayout = styled.main`
  width: 100%;
  height: 100vh;
  @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
    overflow-x: hidden;
  }
  
`;

function Layout({ children }) {
  return (
    <StyledLayout>
      <MainNavigation />
      {children}
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
