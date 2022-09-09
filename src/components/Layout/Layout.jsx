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

  & div.padder {
    padding-top: 127px;
    @media only screen and (max-width: ${MOBILE_STYLE.max_width}) {
      padding-top: 68px;
    }
  }
  
`;

function Layout({ children }) {
  return (
    <StyledLayout>
      <MainNavigation />
      <div className="padder">{children}</div>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
