import React, {Fragment, useContext, useEffect} from 'react';
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Contacts = (props) => {
    const contactContext = useContext(ContactContext);
    const {contacts, filtered, getContacts, loading} = contactContext;
    useEffect(() => {
        console.log(contacts)
        getContacts()
        console.log(contacts)
    }, []);
    console.log(contacts)

    if (contacts.length === 0) return <h4>Please add a contact</h4>
    const shown = filtered ? filtered : contacts
    return (
        <Fragment>
            {contacts !== null && !loading ?
                <TransitionGroup>
                    {shown.map(contact => (
                        <CSSTransition key={contact._id} timeout={800} classNames="item">
                            <ContactItem contact={contact}/>
                        </CSSTransition>)
                    )}
                </TransitionGroup>
                : <h1>Loading...</h1>
            }
        </Fragment>
    )
};

export default Contacts;