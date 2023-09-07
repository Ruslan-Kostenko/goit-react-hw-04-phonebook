import { useEffect, useState } from 'react';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledPhoneBook } from './PhoneBook/PhoneBook.styled';
import { GlobalStyle } from './GlobalStyle';

const defaultContacts = [
    { id: 'id-1', Name: 'Rosie Simpson', Number: '459-12-56' },
    { id: 'id-2', Name: 'Hermione Kline', Number: '443-89-12' },
    { id: 'id-3', Name: 'Eden Clements', Number: '645-17-79' },
    { id: 'id-4', Name: 'Annie Copeland', Number: '227-91-26' },
]

export const App = () => {
  const [contacts, setContacts] = useState(defaultContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storageContact = localStorage.getItem('storageContact');
    if (storageContact !== null) {
      setContacts(JSON.parse(storageContact));
    }
  }, []);

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem('storageContact', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.some(
        contact => contact.Name.toLowerCase() === newContact.Name.toLowerCase()
      )
    ) {
      alert(`${newContact.Name} already recorded in the directory`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]);
  };

  const onClickDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = value => setFilter(value);

  const getFiltered = () =>
    contacts.filter(contact =>
      contact.Name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <StyledPhoneBook>
      <h1>Phonebook</h1>
      <PhoneBook addContact={addContact} />

      {contacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter phoneFilter={filter} changeFilter={changeFilter} />
          <ContactList
            contacts={getFiltered()}
            deleted={onClickDelete}
          ></ContactList>
        </>
      )}
      <GlobalStyle />
    </StyledPhoneBook>
  );
};
