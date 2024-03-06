import React from 'react';
import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';

import { getContactsList, getFilterContacts } from '../../redux/selector';
import css from './ContactsList.module.css';

export default function ContactsList({ contacts }) {
  const contactsList = useSelector(getContactsList);
  const filter = useSelector(getFilterContacts);

  const getFilteredData = () => {
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterData = getFilteredData(contactsList);

  return (
    <ul className={css.list}>
      {filterData.map(user => (
        <ContactItem key={user.id} {...user} />
      ))}
    </ul>
  );
}
