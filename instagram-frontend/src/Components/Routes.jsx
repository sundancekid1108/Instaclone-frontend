import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Feed} />
      <Route path="/explore" component={Explore} />
      <Route path="/search" component={Search} />
      <Route path="/:username" component={Profile} />
    </Switch>
  </BrowserRouter>
);

// Switch안에 Route 못씀..(BrowserRouter로 감싸야함)

const LoggedOutRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Auth} />
    </Switch>
  </BrowserRouter>

);

const AppRouter = ({ isLoggedIn }) => isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
