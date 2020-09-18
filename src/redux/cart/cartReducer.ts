import { Item } from '../../data/shop';
import { DispatchAction } from '../rootReducer';
import { addItemToCart } from './cartUtils';

const INTIAL_STATE = {
  hidden: true,
  cartItems: [] as Item[],
};

const cartReducer = (state = INTIAL_STATE, action: DispatchAction) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return { ...state, hidden: !state.hidden };
    case 'ADD_CART_ITEM':
      return { ...state, cartItems: addItemToCart(state.cartItems, action.payload) };
    default:
      return state;
  }
};

export default cartReducer;
