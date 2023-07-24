import React from 'react';
import { nanoid } from "nanoid";

import { ContactForm } from "./ContactForm";
import { ContactList } from './ContactList';
import { Filter } from "./Filter";

import { Container, SectionStyled } from "./App.styled";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts && storedContacts.length > 0) {
      this.setState({contacts: storedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const updatedContacts = this.state.contacts;

    if (updatedContacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(updatedContacts))
    }

  }

  checkContactByName = cName => {
    const array = this.state.contacts
    const result = array.find(({name}) => cName.toLowerCase() === name.toLowerCase())
    if (result) {
      alert(`${cName} is already in contacts`)
      return true
    }
    return false
  }
  addContact = (name, number) => {
    if(this.checkContactByName(name)) {
      return
    }
    const id = nanoid(3);
    this.setState(prevState => ({
      contacts: ([...prevState.contacts, { id, name: name, number: number }])
    }))
  }

  deleteContact = id => {
    this.setState(state => ({
      contacts: (state.contacts.filter(contact => contact.id !== id))
    }))
  }

  setFilter = (e) => {
    this.setState({filter: e.target.value});
  }

  filterContactsByName = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()))
    }

  render() {
    const { filter } = this.state;

    return (
      <SectionStyled>
        <h1>Phonebook</h1>
        <Container>
          <h2>Add new contact</h2>
          <ContactForm
            onAddContact={this.addContact} />
        </Container>

        <Container>
          <h2>Contacts</h2>
            <Filter 
            filterString={filter}
            onSetFilter={this.setFilter}
            />
          <ContactList
            list={this.filterContactsByName()}
            onDeleteContact={this.deleteContact}
          />
        </Container>
      </SectionStyled>
    )
  }
};
