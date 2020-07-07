import React from 'react';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';

import classes from './styles.css';

const sideDrawer = props => {

  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default sideDrawer;