import React from 'react';

// hooks
import { useSelector } from 'react-redux';
import { useState } from 'react';

// email tool
import emailjs from 'emailjs-com';

// style
import '../style/Authentication.css';

const Authentication = () => {
    const addedMessage = useSelector((state) => state.messageItem.messages_items);
    const mappedMessage = addedMessage.map(item => item.name);
    console.log(mappedMessage);

    const [yourName, setYourName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState(mappedMessage)
    
    // errors
    const [yourNameIsValid, setYourNameIsValid] = useState(true);
    const [emailIsValid, setEmailIsValid] = useState(true);

    const templateParams = {
        to_name: email,
        from_name: 'template_16vapzu',
        subject: yourName,
        message_html: message
    };

    const handleResetForm = () => {
        setYourName({
            yourName: '',
        });
        setEmail({
            email: '',
        });
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        if (yourName.trim() === '') {
            setYourNameIsValid(false);
            return;
        }

        if (email.trim() === '') {
            setEmailIsValid(false);
            return;
        }

        setYourNameIsValid(true);
        setEmailIsValid(true);

        handleResetForm();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="authentication">
            <div className="form-wrapper">
                <h4>Do you want to receive emails with weather forecast?</h4>
                <form className="myForm" onSubmit={handleSubmit}>
                    <input type="text" 
                        className="name" 
                        value={yourName} 
                        placeholder="Your name"
                        onChange={event => setYourName(event.target.value)}
                    />
                    {!yourNameIsValid && <p className="error_message">Please, write your name!</p>}
                    <input type="text" 
                        className="email" 
                        value={email} 
                        placeholder="Your email"
                        onChange={event => setEmail(event.target.value)}
                    />
                    {!emailIsValid && <p className="error_message">Please, write your email!</p>}
                    <button className="submit" type="submit">
                        SEND EMAIL 
                    </button>
                </form>                        
            </div>  
            <div className="background-image-wrapper"></div>      
        </div>
    );
}
 
export default Authentication;