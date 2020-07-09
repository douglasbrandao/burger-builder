import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button';

class OrderSummary extends Component {
  // This could be a functional component, doesn't have to be a class
  componentDidUpdate() {
    console.log('Order Summary Update');
  }
  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize ' }}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>
        )
      });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A Delicious order with the following ingredients:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Total price: {this.props.price}</strong></p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux >);
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired
}

export default OrderSummary;