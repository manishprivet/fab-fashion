import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCardHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + (item.quantity ? item.quantity : 0), 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => acc + (item.quantity ? item.quantity * item.price : 0), 0)
);
