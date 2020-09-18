import { DispatchAction } from '../rootReducer';
import { User } from './userReducer';

export const setCurrentUser = (user: User) =>
  ({
    type: 'SET_CURRENT_USER',
    payload: user,
  } as DispatchAction);
