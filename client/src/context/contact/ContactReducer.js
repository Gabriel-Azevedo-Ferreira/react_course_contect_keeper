import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CCURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
} from '../types'

const ContactReducer = (state, action) => {
    switch (action.type) {
        default:
            return state
        case ADD_CONTACT:
            return {
                ...state, contacts: [...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            return {...state, contacts: state.contacts.filter(c => c.id !== action.payload) }
    }
}

export default ContactReducer