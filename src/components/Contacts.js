import React from 'react'
import You from './You';
import People from './People';

function Contacts(props) {
    return (
        <div className="contacts">
            <You setContact={props.setContact} />

            <People setContact={props.setContact} contacts={props.contacts} />
        </div>
    )
}

export default Contacts
