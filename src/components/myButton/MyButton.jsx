import React from 'react';
import './MyButton.css'
const MyButton = (props) => {
    return (
        <button {...props} className={'myButton ' + props.className} />

    );
};

export default MyButton;