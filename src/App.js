import React from 'react';
import Chat from './components/Chat'
import Contacts from './components/Contacts';
import { useState } from 'react';

function App() {

  const [contacts] = useState([
    {
        id: 1,
        name:'Cierra Vega',
        desc: 'Various sea birds are elegant, but nothing is as elegant as a gliding pelican' },
    {
        id: 2,
        name:'Alden Cantrell',
        desc: 'Lets all be unique together until we realise we are all the same' },
    {
        id: 3,
        name:'Miranda Shaffer',
        desc: 'In hopes of finding out the truth, he entered the one-room library' },
    {
        id: 4,
        name:'Bradyn Kramer',
        desc: 'The sky is clear, the stars are twinkling' },
    {
        id: 5,
        name:'Rodrigo Mitchell',
        desc: 'The virus had powers none of us knew existed' },
    {
        id: 6,
        name:'Katie Adams',
        desc: 'Never underestimate the willingness of the greedy to throw you under the bus' },
    {
        id: 7,
        name:'Rebecca Mejia',
        desc : "It didn't make sense unless you had the power to eat colors"
    } ])


  const [contact, setContact] = useState({
    id: null,
    name: 'Deeptanshu Sharma',
    desc: 'Your description about you or status here'
  })  



  return (
    <div className="App">
      
      <Contacts setContact={setContact} contacts={contacts} />

      <Chat contact={contact} contacts={contacts} />

    </div>
  );
}

export default App;

