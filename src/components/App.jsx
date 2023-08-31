import { Component } from 'react';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { ContactList } from './PhoneBook/ContactList';
import { Filter } from './PhoneBook/Filter';
import { StyledPhoneBook } from './PhoneBook/PhoneBook.styled';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', Name: 'Rosie Simpson', Number: '459-12-56' },
      { id: 'id-2', Name: 'Hermione Kline', Number: '443-89-12' },
      { id: 'id-3', Name: 'Eden Clements', Number: '645-17-79' },
      { id: 'id-4', Name: 'Annie Copeland', Number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storageContact = localStorage.getItem('storageContact');
    if(storageContact !== null) {
      this.setState({
        contacts: JSON.parse(storageContact),
      })
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem('storageContact', JSON.stringify(this.state.contacts))
    }
  };


  addContact = newContact => {
    this.setState(prevState => {
      if (
        this.state.contacts.some(
          contact =>
            contact.Name.toLowerCase() === newContact.Name.toLowerCase()
        )
      ) {
        alert(`${newContact.Name} already recorded in the directory`);
        return;
      }

      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  onClickDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  changeFilter = value => {
    this.setState({
      filter: value,
    });
  };

  getFiltered = () => {
    return this.state.contacts.filter(contact =>
      contact.Name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const filtered = this.getFiltered();
    return (
      <StyledPhoneBook>
        <h1>Phonebook</h1>
        <PhoneBook addContact={this.addContact} />

        {this.state.contacts.length !== 0 && (
          <>
            <h2>Contacts</h2>
            <Filter
              phoneFilter={this.state.filter}
              changeFilter={this.changeFilter}
            />
            <ContactList
              contacts={filtered}
              deleted={this.onClickDelete}
            ></ContactList>
          </>
        )}
        <GlobalStyle />
      </StyledPhoneBook>
    );
  }
}
