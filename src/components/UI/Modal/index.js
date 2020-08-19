import React, { Component } from "react";
import classes from "./styles.css";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import PropTypes from "prop-types";
import Backdrop from "../Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    console.log("Modal will update");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  modalClosed: PropTypes.func,
};

export default Modal;
