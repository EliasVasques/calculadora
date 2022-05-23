import React from 'react';

import './Button.css';

const Button = ( {children, className, onClick} ) => {
    let classes = className + ' button';
    return (

    <button 
         className={classes}
        
        onClick={() => onClick(children)}
    >
        { children }
    </button>);
}
 
export default Button;