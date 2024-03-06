import React from 'react';
import { useDispatch } from 'react-redux';

import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import { addNewContact } from '../redux/contactsSlice';
import { filterContacts } from '../redux/filterSlice';

export default function App() {
  const dispatch = useDispatch();

  const addContact = newContact => {
    dispatch(addNewContact(newContact));
  };

  const handleChangeInput = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={handleChangeInput} />
      <ContactsList />
    </div>
  );
}
