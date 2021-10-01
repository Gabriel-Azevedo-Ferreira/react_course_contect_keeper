import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CCURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER, CONTACT_ERROR, CLEAR_ERRORS,
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
            return {...state, contacts: state.contacts.filter(c => c.id !== action.payload)}
        case SET_CCURRENT:
            return {...state, current: action.payload}
        case CLEAR_CURRENT:
            return {...state, current: null}
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(c => c.id === action.payload.id ? action.payload : c)
            }
        case FILTER_CONTACT:
            return {
                ...state, filtered: state.contacts.filter(c => {
                        const regex = new RegExp(`${action.payload}`, 'gi')
                        return c.name.match(regex) || c.email.match(regex)
                    }
                )
            }
        case CLEAR_FILTER:
            return {...state, filtered : null}
        case CONTACT_ERROR:
            return {...state, error : action.payload}
        case CLEAR_ERRORS:
            return {...state, error : null}
    }
}

export default ContactReducer