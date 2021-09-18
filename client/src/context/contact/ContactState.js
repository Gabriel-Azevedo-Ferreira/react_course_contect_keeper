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
        ],
        current: null
    }
    const [state, dispatch] = useReducer(ContactReducer, initialState)

    // add contact
    const addContact = (contact) => {
        console.log(contact)
        contact.id = v4()
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    // DELETE_CONTACT
    const deleteContact = (id) => {
        dispatch({type: DELETE_CONTACT, payload: id})
    }

    // SET_CCURRENT
    const setCurrent = (contact) => {
        dispatch({type: SET_CCURRENT, payload: contact})
    }

    // CLEAR_CURRENT
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }

    // UPDATE_CONTACT
    const updateContact = (contact) => {
        dispatch({type: UPDATE_CONTACT, payload: contact})
    }

    // FILTER_CONTACT

    // CLEAR_FILTER

    return <ContactContext.Provider value={
        {
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
        }
    }>
        {props.children}
    </ContactContext.Provider>
}
export default ContactState