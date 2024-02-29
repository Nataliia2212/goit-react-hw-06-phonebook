import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterChange: '',
  },
  reducers: {
    filterContacts(state, action) {
      state.filterChange = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterContacts = filterSlice.actions.filterContacts;
