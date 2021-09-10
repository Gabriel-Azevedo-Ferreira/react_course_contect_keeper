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
import uuid from 'uuid';

const ContactState = props => {
    const initialState = {
        contacts: [
            {id: 3, name: 'larry page', email: 'sadf@asd.com', phone: '333-333-333', type: 'professional'}
        ]
    }
    const [state, dispatch] = useReducer(ContactReducer, initialState)
    // ADD_CONTACT

    // DELETE_CONTACT

    // SET_CCURRENT

    // CLEAR_CURRENT

    // UPDATE_CONTACT

    // FILTER_CONTACT

    // CLEAR_FILTER

    return <ContactContext.Provider value={{contacts:state.contacts}}>
        {props.children}
    </ContactContext.Provider>
}
export default ContactState