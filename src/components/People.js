import React from 'react'

function People(props) {

    return (
        <div className="people-list">

            {props.contacts.map(c => 

                <div key={c.id} className="people" onClick={() => props.setContact(c)}>

                    <img src="images/photo-you.jpeg" className="contact-img" alt="profile" />

                    <div className="contact-detail">
                        <span className="contact-name">{c.name}</span>
                        <div className="contact-about">{c.desc}</div>
                    </div>
                    
                </div>)}
            
        </div>
    )
}

export default People
