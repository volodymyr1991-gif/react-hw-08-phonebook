import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import routes from "../../mainRoutes";
import UserMenu from "../userMenu/UserMenu";
import { isAuthenticated } from "../../redux/auth/authSelectors";
import styles from "./Navigation.module.css";

const Navigation = ({ isAuth }) => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      {routes.map(
        (route) =>
          !route.restricted && (
            <li className={styles.listItem} key={route.path}>
              <NavLink
                exact
                className={styles.listLink}
                activeClassName={styles.active}
                to={route.path}
              >
                {route.label}
              </NavLink>
            </li>
          )
      )}
      {routes.map(
        (route) =>
          route.privat &&
          isAuth && (
            <li className={styles.listItem} key={route.path}>
              <NavLink
                exact
                className={styles.listLink}
                activeClassName={styles.active}
                to={route.path}
              >
                {route.label}
              </NavLink>
            </li>
          )
      )}
    </ul>
    <UserMenu />
  </nav>
);
const mapStateToProps = (state) => ({
  isAuth: isAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
