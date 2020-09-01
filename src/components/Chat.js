import React, {useState} from 'react'
import ChatTop from './ChatTop'
import ChatArea from './ChatArea';
import ChatMsgArea from './ChatMsgArea';


const Chat = (props) => {

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 0,
            contactID: 2,
            msg:'Nobody has encountered an explosive daisy and lived to tell the tale.' }, 
        {
            id: 2,
            sender: 0,
            contactID: 1,
            msg:"He didn't heed the warning and it had turned out surprisingly well." }, 
        {
            id: 3,
            sender: 1,
            contactID: 1,
            msg:'A glittering gem is not enough.' }, 
        {
            id: 4,
            sender: 0,
            contactID: 1,
            msg:"Most shark attacks occur about 10 feet from the beach since that's where the people are." }, 
        {
            id: 5,
            sender: 1,
            contactID: 1,
            msg:'The Great Dane looked more like a horse than a dog.' }, 
        {
            id: 6,
            sender: 0,
            contactID: 3,
            msg:'He was surprised that his immense laziness was inspirational to others.' },
        {
            id: 7,
            sender: 1,
            contactID: 3,
            msg:'The old apple revels in its authority.' },
        {
            id: 8,
            sender: 0,
            contactID: 4,
            msg:"Separation anxiety is what happens when you can't find your phone." },
        {
            id: 9,
            sender: 0,
            contactID: 1,
            msg:'He had concluded that pigs must be able to fly in Hog Heaven.' },
        {
            id: 10,
            sender: 1,
            contactID: 2,
            msg:'It was a really good Monday for being a Saturday.' },
        {
            id: 11,
            sender: 1,
            contactID: 1,
            msg:'The lake is a long way from here.' },
        {
            id: 12,
            sender: 1,
            contactID: 4,
            msg:'Her daily goal was to improve on yesterday.' },
        {
            id: 13,
            sender: 1,
            contactID: 3,
            msg:'This book is sure to liquefy your brain.' },
        {
            id: 14,
            sender: 0,
            contactID: 1,
            msg:'The delicious aroma from the kitchen was ruined by cigarette smoke.' },
        {
            id: 15,
            sender: 0,
            contactID: 2,
            msg:'Everybody should read Chaucer to improve their everyday vocabulary.' },
        {
            id: 16,
            sender: 1,
            contactID: 2,
            msg:'He was so preoccupied with whether or not he could that he failed to stop to consider if he should.' },
        {
            id: 17,
            sender: 0,
            contactID: 2,
            msg:'Blue sounded too cold at the time and yet it seemed to work for gin.'}
    ])


    const filterMessages = messages.filter((m) => m.contactID === props.contact.id)


    function sendMsg(msg){
        const len = messages.length
        const temp = {
            id: len+1,
            sender: 0,
            contactID: props.contact.id,
            msg: msg
        }
        if(msg.length>0){
            setMessages([...messages, temp])
        }
        
    }

    


    if(props.contact.id===null){

        return (
            <div className="chat-welcome">
                <div className="welcome-msg">
                    <h1>Welcome, <span>{props.contact.name}</span></h1>
                    <img src="images/photo-you.jpeg" className="welcome-img" alt="profile" />
                    <h3>{props.contact.desc}</h3> 

                    <hr />

                    <div>Search here or Select a Contact from the list to start a conversation</div>
                    
                    <input className="search-contact" name="search-contact" placeholder="Search a contact" />
                    <button className="search-btn">START</button>
                    
                    
                </div>
            </div>
        )
    } else {
        
        return (
            
            <div className="chat">
                
                <ChatTop contact={props.contact} />
                <ChatArea messages={filterMessages} />
                <ChatMsgArea  sendMsg={sendMsg} />
                
            </div>
        )
    }

    
}

export default Chat
