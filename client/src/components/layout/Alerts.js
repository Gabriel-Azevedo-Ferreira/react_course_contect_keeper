import React, {useContext} from 'react';
import AlertContext from "../../context/alert/AlertContext";

function Alerts(props) {
    const alertContext = useContext(AlertContext);
    const {alerts} = alertContext
    return (
        alerts.length > 0 && alerts.map(al => <div key={al.id} className={`alert alert-${al.type}`}>
            <i className="fas fa-info-circle"/> {al.msg}
        </div>)
    );
}

export default Alerts;