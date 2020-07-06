import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button';

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize ' }}>{igKey}</span>: {props.ingredients[igKey]}
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
      <p><strong>Total price: {props.price}</strong></p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
}

export default orderSummary;