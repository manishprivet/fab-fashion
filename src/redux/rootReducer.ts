import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import userReducer from './user/userReducer';
import { Actions } from './constants';

const reducers = {
  user: userReducer,
};

const rootReducer = combineReducers(reducers);

type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface DispatchAction {
  type: Actions;
  payload: any;
}

export default rootReducer;
