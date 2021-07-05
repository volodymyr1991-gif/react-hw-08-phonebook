import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import authRoutes from "../../authRoutes";
import { isAuthenticated, getUserName } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";
import styles from "./UserMenu.module.css";

const UserMenu = ({ isAuth, name, onLogout }) => {
  return !isAuth ? (
    <div className={styles.listItem}>
      {authRoutes.map((route) => (
        <NavLink
          key={route.path}
          exact
          className={styles.listLink}
          activeClassName={styles.active}
          to={route.path}
        >
          {route.label}
        </NavLink>
      ))}
    </div>
  ) : (
    <div className={styles.userBlock}>
      <img src="/img/LoginIcon.jpg" alt="Users icon" className={styles.img} />
      <span className={styles.name}>{name}</span>
      <button onClick={onLogout} className={styles.btn}>
        Exit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: isAuthenticated(state),
  name: getUserName(state),
});
const mapDispatchToProps = {
  onLogout: logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
