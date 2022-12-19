import React, { useEffect, useState } from 'react'

import AddContact from './AddContact'
import ContactList from './ContactList'
import Header from './Header'


const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contact,setContact] = useState([])
  
  const addContactHandler = (contact1) =>{
    console.log(contact)
    setContact([...contact, contact1]);
      
  }
  const removeContactHandler = (id) => {
      const newContactList = contact.filter(contact =>{
        return contact.id !== id;
      })
     setContact(newContactList);
  }
  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts){
      setContact(retriveContacts);
    }
  })
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contact));
  },[contact])


  return (
    <div>
    
      <Header />
      
        <AddContact  addContactHandler={addContactHandler}/>
        <ContactList contacts={contact}  getContactId={removeContactHandler}/>
    
    </div>
  )
}

export default App
