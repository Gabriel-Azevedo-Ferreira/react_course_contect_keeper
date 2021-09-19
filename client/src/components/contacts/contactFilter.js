import React, {useContext} from 'react';
import ContactContext from "../../context/contact/ContactContext";

function ContactFilter(props) {
    const contactContext = useContext(ContactContext)
    const {filterContact, clearFilter} = contactContext
    const onChange = (e) => {
        const val = e.target.value
        console.log(val)
        if (val === '') {
            clearFilter()
        } else {
            filterContact(val)
        }
    }
    return (
        <form>
            <input type="text" placeholder={"Filter Contacts..."} onChange={onChange}/>
        </form>
    );
}

export default ContactFilter;