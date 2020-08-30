import React, {useState} from 'react'

function ChatMsgArea(props) {

    const [msg, setMsg] = useState('')

    const handleChange = (e) => {
        setMsg(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="chat-msg-area">
            <input type="text" onChange={handleChange} name="msg" value={msg} placeholder="Type a message" className="msg-input" />
            <button onClick={() => {setMsg('');props.sendMsg(msg)}} className="send-btn">GO</button>
        </div>
    )
}

export default ChatMsgArea
