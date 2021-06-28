import React from 'react';
import { useSelector } from 'react-redux';

// style
import '../style/Authentication.css';

const Authentication = () => {
    const addedMessage = useSelector((state) => state.messageItem.messages_items);
    console.log(addedMessage);

    return (
        <React.Fragment>
            <div className="authentication"></div>
        </React.Fragment>
    );
}
 
export default Authentication;