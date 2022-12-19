import React from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) =>{
        return (
           
            <div>
                <ContactCard contact={contact} clickHandler={deleteContactHandler}/>
            </div>
                
           
        )
    })
  return (
    <div className='ui celled list'>
       {renderContactList}
        </div>
  )
}

export default ContactList