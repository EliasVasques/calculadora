import React from 'react';

import './Button.css';

const Button = ( {children, className, onClick, cssId} ) => {
    let classes = className + ' button';
    return (

    <button 
        className={classes}
        onClick={() => onClick(children)}
        id={cssId}
    >
        { children }
    </button>);
}
 
export default Button;