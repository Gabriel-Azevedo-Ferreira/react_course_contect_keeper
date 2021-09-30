import {CLEAR_ERRORS, REGISTER_FAIL, REGISTER_SUCCES} from "../types";

export default (state, action) => {
    switch (action.payload){
        case REGISTER_SUCCES:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state, ...action.payload, isAuthenticated: true, loading: false
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {...state, errors: null}
        default:
            return state
    }
}