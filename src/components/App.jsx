import React from 'react';
import { ContactForm, ContactList, Filter } from './exportMap';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitHandler = event => {
    event.preventDefault();
    let { name, number } = event.target.elements;
    if (this.state.contacts.find(el => el.name === name.value)) {
      alert(`Sorry! ${name.value} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: new Date().getTime(),
          [name.name]: name.value,
          [number.name]: number.value,
        },
      ],
    });
  };

  onFilterInputChangeHandler = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  filteredContacts = contacts => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  onDeleteBtnClickHandler = event => {
    this.setState({
      contacts: [
        ...this.state.contacts.filter(
          contact => contact.id !== Number(event.target.id)
        ),
      ],
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmitHandler}
          contactsRef={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter
          onChange={this.onFilterInputChangeHandler}
          value={this.state.filter}
        />

        {!this.state.filter ? (
          <ContactList
            contacts={this.state.contacts}
            onClick={this.onDeleteBtnClickHandler}
          />
        ) : (
          <ContactList contacts={this.filteredContacts(this.state.contacts)} />
        )}
      </div>
    );
  }
}

export default App;
