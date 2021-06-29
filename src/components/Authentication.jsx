import React from 'react';
import { useSelector } from 'react-redux';

import { useState } from 'react';

import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { send } from 'emailjs-com';

// style
import '../style/Authentication.css';
import { add } from 'lodash';
import { tSConstructSignatureDeclaration } from '@babel/types';

const Authentication = () => {
    const addedMessage = useSelector((state) => state.messageItem.messages_items);
    const mappedMessage = addedMessage.map(item => item.name);
    console.log(mappedMessage);

    const [your_name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [message, setMessage] = useState(mappedMessage)

    const templateParams = {
        to_name: email,
        from_name: 'template_16vapzu',
        subject: your_name,
        message_html: message
    };

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="authentication">
            <form className="#myForm" onSubmit={handleSubmit}>
                <input type="text" className="name" value={your_name} onChange={event => setName(event.target.value)}/>
                <input type="text" className="email" value={email} onChange={event => setEmail(event.target.value)}/>
                <button className="submit" type="submit">SEND MAIL</button>
            </form>            
        </div>
    );
}
 
export default Authentication;