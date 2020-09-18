import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import userReducer from './user/userReducer';
import { Actions } from './constants';
import cartReducer from './cart/cartReducer';

const reducers = {
  user: userReducer,
  cart: cartReducer,
};

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface DispatchAction {
  type: Actions;
  payload?: any;
}

export default rootReducer;
