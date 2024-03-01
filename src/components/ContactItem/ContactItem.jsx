import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/contactsSlice';

import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      {name}: {number}
      <button className={css.button} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
}
