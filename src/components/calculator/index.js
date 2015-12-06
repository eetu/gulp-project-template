import React, {Component, PropTypes} from 'React';

class Calculator extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  render() {
    const {calculator} = this.props;

    return (
      <div>
        <button onClick={this.handleDecrement.bind(this)}>-</button>
        {calculator.value}
        <button onClick={this.handleIncrement.bind(this)}>+</button>
      </div>
    );
  }
}

Calculator.propTypes = {
  actions: PropTypes.object.isRequired,
  calculator: PropTypes.object.isRequired
};

export default Calculator;
