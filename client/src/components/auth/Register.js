import React, {useContext, useEffect, useState} from 'react';
import AlertContext from "../../context/alert/AlertContext";
import AuthContext from "../../context/auth/authContext";

function Register(props) {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const {setAlert} = alertContext;
    const {register, clearErrors, error, isAuthenticated} = authContext;
    const [user, setUser] = useState({name: '', email: '', password: '', password2: ''});
    const {name, email, password, password2} = user;
    const onChange = e => setUser({...user, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        if (name === '' || email === '' || password === '' || password2 === '') {
            setAlert('Please enter all fields', 'danger')
        } else if (password !== password2) {
            setAlert("Passwords do not match", 'danger')
        } else {
            register({name, email, password})
        }
    }
    useEffect(() => {
        if (isAuthenticated) props.history.push('/')
        if (error === 'user exists') {
            setAlert(error, 'danger')
            clearErrors()
        }
    }, [isAuthenticated, error, props.history]);


    return (
        <div className='form-container'>
            <h1>Account <span className="text-primary">Register</span></h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id='name' type="text" name="name" value={name} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id='email' type="email" name="email" value={email} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" name="password" value={password} onChange={onChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input id='password2' type="password" name="password2" value={password2} onChange={onChange}/>
                </div>
                <input type="submit" value="Register" className="btn btn-primary btn-block"/>
            </form>
        </div>
    );
}

export default Register;