import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactsList from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import { addNewContact } from '../redux/contactsSlice';
import { filterContacts } from '../redux/filterSlice';
import { getContactsList, getFilterContacts } from '../redux/selector';

export default function App() {
  const dispatch = useDispatch();

  const contactsList = useSelector(getContactsList);
  const filter = useSelector(getFilterContacts);

  const addContact = newContact => {
    dispatch(addNewContact(newContact));
  };

  const handleChangeInput = e => {
    dispatch(filterContacts(e.target.value));
  };

  const getFilteredData = () => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterData = getFilteredData(contactsList);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contactsList} onFormSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={handleChangeInput} />
      <ContactsList contacts={filterData} />
    </div>
  );
}
