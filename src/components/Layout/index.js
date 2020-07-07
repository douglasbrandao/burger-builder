import React from 'react';
import Aux from '../../hoc/Aux';

import classes from './styles.css';
import Toolbar from '../Navigation/Toolbar';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;