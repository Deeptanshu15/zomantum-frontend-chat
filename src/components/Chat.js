import React from 'react'
import ChatTop from './ChatTop'
import ChatArea from './ChatArea';
import ChatMsgArea from './ChatMsgArea';


const Chat = () => {
    return (
        <div className="chat">
            <ChatTop />
            <ChatArea />
            <ChatMsgArea />
        </div>
    )
}

export default Chat