import React, { Component } from "react";
import axios from "../../axios-orders";
import Order from "../../components/Order";
import withErrorHandler from "../../hoc/withErrorHandler";
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Orders extends Component {
  
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner />;

    if(!this.props.loading) {
      orders = (
        this.props.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        ))
      );
    }
     
    return (
      <Aux>
        {orders}
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
