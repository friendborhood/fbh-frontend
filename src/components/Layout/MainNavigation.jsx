import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = (props) => {
  const tabs = ["login", "sign-up"];

  const formatTabText = (text) => {
    let myText = text.charAt(0).toUpperCase() + text.slice(1);
    console.log(myText);
    return myText;
  };

  const mapTabs = () => {
    return tabs.map((item, index) => {
      return (
        <li key={index}>
          <NavLink to={`/${item}`} activeClassName={classes.active}>
            {formatTabText(item)}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <header>
      <nav className={classes.nav}>
        <img
          className={classes.logo}
          src="./photo/logo.png"
          width="350px"
          alt="Logo"
        />
        <ul>{mapTabs()}</ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
