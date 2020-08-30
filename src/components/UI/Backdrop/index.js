import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.css';

const background = props => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

background.propTypes = {
  show: PropTypes.bool
}

export default background;