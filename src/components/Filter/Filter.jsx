import React from 'react';

import { getFilterContacts } from '../../redux/selector';
import { useSelector } from 'react-redux';

import css from './Filter.module.css';

export default function Filter({ onChange }) {
  const filter = useSelector(getFilterContacts);

  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        name="filter"
        onChange={onChange}
      />
    </div>
  );
}
