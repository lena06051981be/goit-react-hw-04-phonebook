import { Contacts } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import React, { useState } from 'react'
import { Container } from './App.styled';
import  ContactsData from 'components/ContactsData.json'

// const contacts = JSON.parse(ContactsData);
// const contacts = ContactsData;


const App = () => {
  const [contacts, setContacts] = useState(ContactsData);
  const [filter, setFilter] = useState('');
  console.log(contacts);


// componentDidMount() {
//     console.log('App componentDidMount');
    
//     const localStorageContacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(localStorageContacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     };
//     // console.log(localStorage);
//   };

//   // componentDidUpdate(prevProps, prevState) {

//   componentDidUpdate(_, prevState) {
//     console.log('App componentDidUpdate');

//     if (this.state.contacts !== prevState.contacts) {
//       console.log('Обновилось поле contacts')

//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     };
//     // console.log(localStorage);
//   };

const formSubmitHandler = event => {
    const newContact = {
      id: event.id,
      name: event.name,
      number: event.number,
    };
    // const id = event.id;
    // const name = event.name;
    // const number = event.number;
    const contactsLists = [...contacts];
    console.log(event);

    if (
      contactsLists.find(
        contacts => newContact.name.toLowerCase() === contacts.name.toLowerCase()
      )) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    } 
    
    setContacts(state => [ newContact, ...state]);
    console.log("contactsLists: ", contactsLists);
   
    // this.setState(({ contacts }) => ({
    //   contacts: [newContact, ...contacts],
    // }));    

    // this.setState({contacts: [newContact, contactsLists]})
    // contactsLists.push({ name, id, number });   

    // this.setState({contacts: contactsLists})
  }

  
const handleDelete = selectedId => {
    setContacts(prevState => {
      return {
      contacts: prevState.contacts.filter(contact => contact.id !== selectedId),
      };
    });
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };  
  
const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();   

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }  
    
    return (
      <Container>
        <PhonebookForm onSubmit={formSubmitHandler} />
        <Filter
          value={filter}
          onFilter={changeFilter} />
        <Contacts
          contactsFiltred={getVisibleContacts()}
          handleDelete={handleDelete}
        ></Contacts>
      </Container>
  )
}

export default App