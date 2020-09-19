import { SECTIONS_DATA } from '../../data/sections';
import { DispatchAction } from '../rootReducer';

const INITAL_DATA = { sections: SECTIONS_DATA };

const directoryReducer = (state = INITAL_DATA, action: DispatchAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
