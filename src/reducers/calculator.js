const intialState = {
  value: 0
};

export default function calculator(state = intialState, action) {
  switch(action.type) {

  case 'INCREMENT':
    return Object.assign({}, state, {
      value: state.value + 1
    });
  case 'DECREMENT':
    return Object.assign({}, state, {
      value: state.value - 1
    });
  default:
    return state;
  }
}
