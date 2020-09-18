import { DispatchAction } from '../rootReducer';

export type User = Record<string, unknown> | null;

export type UserState = { currentUser: User };

const INITIAL_STATE: UserState = { currentUser: null };

const userReducer = (state = INITIAL_STATE, action: DispatchAction) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;
