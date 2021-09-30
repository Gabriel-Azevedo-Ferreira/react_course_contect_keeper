import React, {useReducer} from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import axios from "axios";
import {CLEAR_ERRORS, REGISTER_FAIL, REGISTER_SUCCES} from "../types";

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: null,
        error: null,
        user: null,
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // load user
    const loadUser = () => console.log("load user")

    // register user
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config)
            dispatch({type: REGISTER_SUCCES, payload: res.data})
        } catch (e) {
            dispatch({type: REGISTER_FAIL, payload: e.response.data.msg})
        }
    }
    // login user
    const login = () => console.log("login")

    // logout
    const logout = () => console.log("logout")
    // clear erros
    const clearErrors = () => dispatch({type: CLEAR_ERRORS})

    return <AuthContext.Provider value={
        {
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user,
            register,
            loadUser,
            login,
            logout,
            clearErrors,
        }
    }>
        {props.children}
    </AuthContext.Provider>
}
export default AuthState