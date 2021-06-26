import React from 'react';
import { useSelector } from 'react-redux';

const Authentication = () => {
    const messageItems = useSelector((state) => state.mesl.message);
    console.log(messageItems);

    return (
        <React.Fragment>
            <p>Autentication:</p>
        </React.Fragment>
    );
}
 
export default Authentication;