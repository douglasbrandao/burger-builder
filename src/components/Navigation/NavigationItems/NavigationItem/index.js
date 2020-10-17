import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classes from "./styles.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink
      activeClassName={classes.active}
      to={props.link}
      exact={props.exact}
    >
      {props.children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string.isRequired,
};

export default navigationItem;
