import React from 'react';

import ContactItem from 'components/ContactItem/ContactItem';

import css from './ContactsList.module.css';

export default function ContactsList({ contacts }) {
  return (
    <ul className={css.list}>
      {contacts.map(user => (
        <ContactItem key={user.id} {...user} />
      ))}
    </ul>
  );
}
