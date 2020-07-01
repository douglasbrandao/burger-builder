import React from 'react';
import Aux from '../../hoc/Aux';

import classes from './styles.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, sidedrawer, backdrop</div>
    <main className={classes.content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;