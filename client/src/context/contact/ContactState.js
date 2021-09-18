import React, {useReducer} from "react";
import ContactContext from "./ContactContext";
import ContactReducer from "./ContactReducer";
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CCURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
} from '../types'
import {v4} from "uuid";
// import v4 from 'uuid';

const ContactState = props => {
    const initialState = {
        contacts: [
            {id: 3, name: 'larry page', email: 'sadf@asd.com', phone: '333-333-333', type: 'professional'},
            {id: 4, name: 'larry page2', email: 'sadf@asd.com2', phone: '333-333-333', type: 'profadfessional'},
            // {id: 5, name: 'larry page3', email: 'sadf@asd.com3', phone: '333-333-333', type: 'professional'},
        ]
    }
    const [state, dispatch] = useReducer(ContactReducer, initialState)

    // add contact
    const addContact = (contact) => {
        contact.id = v4()
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    // DELETE_CONTACT
    const deleteContact = (id) => {
        dispatch({type: DELETE_CONTACT, payload: id})
    }

    // SET_CCURRENT

    // CLEAR_CURRENT

    // UPDATE_CONTACT

    // FILTER_CONTACT

    // CLEAR_FILTER

    return <ContactContext.Provider value={
        {
            contacts: state.contacts,
            addContact,
            deleteContact,
        }
    }>
        {props.children}
    </ContactContext.Provider>
}
export default ContactState