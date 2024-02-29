import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: [{ name: 'Nataliia', number: '0999999999', id: 'abc' }],
  },
  reducers: {
    addNewContact(state, action) {
      state.contactsList.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.contactsList.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsList.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const addNewContact = contactsSlice.actions.addNewContact;
export const deleteContact = contactsSlice.actions.deleteContact;
