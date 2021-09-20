import React, {useReducer} from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

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
    // register user
    // login user
    // logout
    // clear erros
    return <AuthContext.Provider value={
        {
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error,
            user: state.user,
        }
    }>
        {props.children}
    </AuthContext.Provider>
}
export default AuthState