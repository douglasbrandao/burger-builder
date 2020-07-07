import React from 'react';
import classes from './styles.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;