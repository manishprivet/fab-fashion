import { SHOP_DATA } from '../../data/shop';
import { DispatchAction } from '../rootReducer';

const INITIAL_STATE = { collections: SHOP_DATA };

const shopReducer = (state = INITIAL_STATE, action: DispatchAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
