import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';

const filterReducer = createReducer('', {
  [setFilter]: (state, { payload }) => payload,
});

export default filterReducer;
