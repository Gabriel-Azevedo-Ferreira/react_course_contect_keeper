import React, {Fragment, useContext} from 'react';
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Contacts = (props) => {
    const contactContext = useContext(ContactContext);
    const {contacts, filtered} = contactContext;
    if (contacts.length === 0) return <h4>Please add a contact</h4>
    const shown = filtered ? filtered : contacts
    return (
        <Fragment>
            <TransitionGroup>
                {shown.map(contact => (
                    <CSSTransition key={contact.id} timeout={800} classNames="item">
                        <ContactItem contact={contact}/>
                    </CSSTransition>)
                )}
            </TransitionGroup>
        </Fragment>
    )
};

export default Contacts;