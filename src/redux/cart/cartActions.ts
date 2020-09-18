import { DispatchAction } from '../rootReducer';

export const toogleCartHidden = () =>
  ({
    type: 'TOGGLE_CART_HIDDEN',
  } as DispatchAction);
