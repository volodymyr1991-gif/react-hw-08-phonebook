import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isAuthenticated } from "../../redux/auth/authSelectors";

const PublicRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuth && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuth: isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
