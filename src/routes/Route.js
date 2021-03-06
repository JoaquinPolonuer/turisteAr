import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isprivate,
  ...rest
}) {
  const signed = false;
  //route is private and the user is not logged in
  if (isprivate && !signed) {
    return <Redirect to="/" />;
  }
  if (!isprivate && signed) {
    return <Redirect to="/home" />;
  }

  return <Route {...rest} component={Component} />;
}
RouteWrapper.PropTypes = {
  isprivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWrapper.defaultProps = {
  isprivate: false,
};
