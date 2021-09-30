import {
    AUTH_ERROR,
    CLEAR_ERRORS,
    LOGIN_FAIL,
    LOGIN_SUCCES,
    REGISTER_FAIL,
    REGISTER_SUCCES,
    USER_LOADED
} from "../types";

export default (state, action) => {
    switch (action.type){
        case LOGIN_SUCCES:
        case REGISTER_SUCCES:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state, ...action.payload, isAuthenticated: true, loading: false
            }
        case USER_LOADED:
            return {
                ...state, user: action.payload, isAuthenticated: true, loading: false
            }
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
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
            return {...state, error: null}
        default:
            return state
    }
}