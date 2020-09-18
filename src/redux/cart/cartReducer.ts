import { DispatchAction } from '../rootReducer';

const INTIAL_STATE = { hidden: true };

const cartReducer = (state = INTIAL_STATE, action: DispatchAction) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
