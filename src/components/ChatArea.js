import React, {useRef, useEffect} from 'react'

function ChatArea({messages}) {

    
    const defRef = useRef(null)

    
    useEffect(() => {
        defRef.current.scrollIntoView({ behavior: 'smooth'})
    }, [messages])

    return (
        
        <div className="chat-area">
            {messages.map(message => <div key={message.id} className="message-container"> <div className={message.sender===0?'message-o':'message-i'}>{message.msg}</div> </div>)}
            
            <div ref={defRef} ></div>
        </div>

        
        
    )
}

export default ChatArea
