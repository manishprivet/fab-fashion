import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import { Actions } from './constants';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart'],
};

const reducers = {
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
};

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface DispatchAction {
  type: Actions;
  payload?: any;
}

export default persistReducer(persistConfig, rootReducer);
