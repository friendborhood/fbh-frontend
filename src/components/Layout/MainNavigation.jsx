import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <header>
      <img className={classes.logo} src="./photo/logo.png" width="400px" />
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/login" activeClassName={classes.active}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" activeClassName={classes.active}>
              sign-up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
