import { Item } from '../../data/shop';
import { DispatchAction } from '../rootReducer';

import { addItemToCart, removeItemFromCart } from './cartUtils';

const INTIAL_STATE = {
  hidden: true,
  cartItems: [] as Item[],
};

const cartReducer = (state = INTIAL_STATE, action: DispatchAction) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return { ...state, hidden: !state.hidden };
    case 'ADD_CART_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case 'CLEAR_ITEM_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    case 'REMOVE_CART_ITEM':
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
