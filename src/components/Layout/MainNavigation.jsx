import { Link } from 'react-router-dom';
import { PAGES } from '../../pages/consts';
import { StyledDiv } from './main-navigation-utils';

const logo = require('../../images/logo.png');

// TODO: Check active-hover-focus imperfect working

function MainNavigation() {
  return (
    <StyledDiv>
      <section className="site-info">
        <img src={logo} alt="logo" />
        <div>About</div>
        <div>System</div>
      </section>
      <section className="user-usage">
        <Link to={PAGES.SIGN_UP}><div>Sign-up</div></Link>
        <Link to={PAGES.LOGIN}><div className="login">Login</div></Link>
      </section>
    </StyledDiv>
  );
}

export default MainNavigation;
