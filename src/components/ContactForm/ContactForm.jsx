import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default function ContactForm({ onFormSubmit, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.every(contact => contact.name !== name)) {
      const newContact = { name, number, id: nanoid(4) };
      onFormSubmit(newContact);
      setName('');
      setNumber('');
    } else {
      return alert(`${name} is already in contacts`);
    }
  };

  const handleChangeInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return name;
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name:
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeInput}
          required
        />
      </label>
      <label className={css.label}>
        Number:
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeInput}
          required
        />
      </label>
      <button className={css.button}>Add contact</button>
    </form>
  );
}

// export default class ContactForm extends Component {
//     state = {
//         name: '',
//         number: ''
// 	  }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const {name, number} = this.state;
//         const {onFormSubmit, contacts} = this.props;

//         if (contacts.every(contact => contact.name !== name)) {
//          const newContact = {name, number, id: nanoid(4)}
//         onFormSubmit(newContact)
//         this.setState({name: '', number: ''})
//     } else {
//       return  alert(`${name} is already in contacts`)
//     }
//   }

//     handleChangeInput = (e) => {
//       const { name, value } = e.target;
//       this.setState({ [name]: value })
//     }

//   render() {
//     console.log()
//     const { name, number} = this.state;

//     return (
//         <form className={css.form} onSubmit={this.handleSubmit}>
//         <label className={css.label}>
//             Name:
//             <input className={css.input} type="text" name="name" value={name} onChange={this.handleChangeInput} required />
//         </label>
//         <label className={css.label}>
//             Number:
//             <input className={css.input} type="tel" name="number" value={number} onChange={this.handleChangeInput} required />
//         </label>

//         <button className={css.button}>Add contact</button>
//       </form>
//     )
//   }
// }
