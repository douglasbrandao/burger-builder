import React from 'react';

import classes from './styles.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = props => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="My burger" />
  </div>
);

export default logo;