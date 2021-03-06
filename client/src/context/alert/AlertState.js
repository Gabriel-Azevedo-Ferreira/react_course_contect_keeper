import React, {useReducer} from 'react';
import {v4} from "uuid";
import {REMOVE_ALERT, SET_ALERT} from "../types";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

function AlertState(props) {
    const initialState = []
    const [state, dispatch] = useReducer(AlertReducer, initialState)
    const setAlert = (msg, type, timeout = 5000) => {
        const id = v4();
        dispatch({type: SET_ALERT, payload: {msg, type, id}})
        setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout)
    }
    return <AlertContext.Provider value={{alerts: state, setAlert}}>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState;