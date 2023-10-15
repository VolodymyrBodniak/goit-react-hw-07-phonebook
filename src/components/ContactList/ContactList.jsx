import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContactAction } from 'redux/contact/slice';
import css from './ContactList.module.css';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = getFilteredContacts();

  const handleDeleteContact = id => {
    dispatch(removeContactAction(id));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.btn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
