import React from 'react';
import css from './ContactItem.module.css';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      {name}: {number}
      <button className={css.button} onClick={() => handleDelete()}>
        Delete
      </button>
    </li>
  );
}
