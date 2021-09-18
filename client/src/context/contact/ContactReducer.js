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
            return {...state, contacts: state.contacts.filter(c => c.id !== action.payload)}
        case SET_CCURRENT:
            return {...state, current: action.payload}
        case CLEAR_CURRENT:
            return {...state, current: null}
        case UPDATE_CONTACT:
            console.log('action',action)
            console.log('state',state)
            return {
                ...state,
                contacts: state.contacts.map(c => c.id === action.payload.id ? action.payload : c)
            }
    }
}

export default ContactReducer