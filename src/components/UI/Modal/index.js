import React from 'react';
import classes from './styles.css';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop';

const modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Aux>
);

modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired
}

export default modal;