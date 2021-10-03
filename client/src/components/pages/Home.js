import React, {useContext, useEffect} from 'react';
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/contactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = (props) => {
    const authContext = useContext(AuthContext)
    const {loadUser} = authContext
    useEffect(() => {
        loadUser()
    }, []);

    return <div className="grid-2">
        <div>
            <ContactForm/>
        </div>
        <div>
            <ContactFilter/>
            <Contacts/>
        </div>
    </div>
};

export default Home;