import { RootState } from '../rootReducer';
import { createSelector } from 'reselect';

const directorySelector = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
  [directorySelector],
  (directory) => directory.sections
);
