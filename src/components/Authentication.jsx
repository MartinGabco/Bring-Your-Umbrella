import React from 'react';
import { useSelector } from 'react-redux';

// style
import '../style/Authentication.css';

const Authentication = () => {
    const messageItems = useSelector((state) => state.mesl.message);
    console.log(messageItems);

    return (
        <React.Fragment>
            <div className="authentication"></div>
        </React.Fragment>
    );
}
 
export default Authentication;