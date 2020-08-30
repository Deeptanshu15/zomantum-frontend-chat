import React from 'react'

function ChatTop(props) {
    
    var desc
    if(props.contact.desc.length>80)
        desc = props.contact.desc.substring(0,80)+'...'
    else
        desc = props.contact.desc


    return (
        <div className="chat-top">
            <img src="images/photo-you.jpeg" className="chat-img" alt="profile" />
            <div className="chat-person">{props.contact.name}</div><br />
            <span>{desc}</span>
            
        </div>
    )
}

export default ChatTop
