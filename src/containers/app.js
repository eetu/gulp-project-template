import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CalculatorActions from '../actions/calculator';

class App extends Component {
  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  render() {
    const {calculator, actions} = this.props;
    return (
      <div>
        <button onClick={this.handleDecrement.bind(this)}>-</button>
        {calculator.value}
        <button onClick={this.handleIncrement.bind(this)}>+</button>
      </div>
    );
  }
}

App.propTypes = {
  calculator: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    calculator: state.calculator
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CalculatorActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
