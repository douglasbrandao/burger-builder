import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button onClick={props.removed} className={classes.Less} disabled={props.disabled}>Less</button>
    <button onClick={props.added} className={classes.More}>More</button>
  </div>
);

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  removed: PropTypes.func.isRequired,
  added: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default buildControl;