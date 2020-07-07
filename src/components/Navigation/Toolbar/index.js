import React from 'react';
import classes from './styles.css';
import Logo from '../../Logo';

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      ...
    </nav>
  </header>
);

export default toolbar;