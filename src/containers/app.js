import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Calculator from '../components/calculator';
import * as CalculatorActions from '../actions/calculator';

class App extends Component {
  render() {
    const {calculator, actions} = this.props;
    return (
      <Calculator actions={actions} calculator={calculator}/>
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
