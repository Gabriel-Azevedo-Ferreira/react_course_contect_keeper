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
    CLEAR_FILTER, CONTACT_ERROR, GET_CONTACTS, CLEAR_CONTACTS,
} from '../types'
import axios from "axios";
// import v4 from 'uuid';

const ContactState = props => {
    const initialState = {
        contacts: [],
        current: null,
        filtered: null,
    }
    const [state, dispatch] = useReducer(ContactReducer, initialState)

    // add contact
    const addContact = async (contact) => {
        console.log(contact)
        const config = {headers: {'Content-Type': 'application/json'}}
        try {
            const res = await axios.post('api/contacts', contact, config)
            dispatch({type: ADD_CONTACT, payload: res.data})
        } catch (e) {
            dispatch({type: CONTACT_ERROR, payload: e.response.msg})
        }
    }

    //get contacts
    const getContacts = async () => {
        const config = {headers: {'Content-Type': 'application/json'}}
        try {
            const res = await axios.get('api/contacts', config)
            dispatch({type: GET_CONTACTS, payload: res.data})
        } catch (e) {
            dispatch({type: CONTACT_ERROR, payload: e.response.msg})
        }
    }

    const clearContacts = () => dispatch({type: CLEAR_CONTACTS})

    // DELETE_CONTACT
    const deleteContact = async (id) => {
        const config = {headers: {'Content-Type': 'application/json'}}

        try {
            await axios.delete(`api/contacts/${id}`, config)
            dispatch({type: DELETE_CONTACT, payload: id})
        } catch (e) {
            dispatch({type: CONTACT_ERROR, payload: e.response.msg})
        }
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
    const updateContact = async (contact) => {
        const config = {headers: {'Content-Type': 'application/json'}}
        try {
            await axios.put(`api/contacts/${contact._id}`, contact,config)
            dispatch({type: UPDATE_CONTACT, payload: contact})
        } catch (e) {
            dispatch({type: CONTACT_ERROR, payload: e.response.msg})
        }
    }

    // FILTER_CONTACT
    const filterContact = (text) => {
        dispatch({type: FILTER_CONTACT, payload: text})
    }

    // CLEAR_FILTER
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }
    return <ContactContext.Provider value={
        {
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContact,
            clearFilter,
            getContacts,
            clearContacts,
        }
    }>
        {props.children}
    </ContactContext.Provider>
}
export default ContactState