import React, { Component } from 'react';
import Modal from '../../components/UI/Modal';
import Aux from '../Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null
    }

    componentDidMount() {
      axios.interceptors.request.use(request => {
        this.setState({ error: null })
        return request;
      })
      axios.interceptors.response.use(null, error => {
        this.setState({ error })
        return error;
      })
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;