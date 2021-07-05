import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./layuot/Layout";
import Spiner from "./spiner/Spiner";
import routes from "../mainRoutes";
import { getCurrentUser } from "../redux/auth/authOperations";
import authRoutes from "../authRoutes";
import Navigation from "./navigation/Navigation";
import PrivatRoute from "./routes/PrivatRouts";
import PublicRoute from "./routes/PublicRouts";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Navigation />

          <Suspense fallback={<Spiner />}>
            <Switch>
              {routes.map((route) => {
                return route.privat ? (
                  <PrivatRoute key={route.path} {...route} />
                ) : (
                  <PublicRoute
                    key={route.path}
                    {...route}
                    restricted={route.restricted}
                  />
                );
              })}
              ))
            </Switch>
            <Switch>
              {authRoutes.map((route) => {
                return route.privat ? (
                  <PrivatRoute key={route.path} {...route} />
                ) : (
                  <PublicRoute
                    key={route.path}
                    {...route}
                    restricted={route.restricted}
                  />
                );
              })}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};
export default connect(null, mapDispatchToProps)(App);
